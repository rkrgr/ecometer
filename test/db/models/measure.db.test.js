const measureModel = require('../../../db/models/measures.db')

const moment = require('moment')

const testData = [
    {
        name: "PV-Anlage installiert",
        companyName: "Märkische Kiste",
        companyId: 1,
        co2Saving: 10,
        timestamp: moment("2018-07-25")
    },
    {
        name: "Hecken gepflanzt",
        companyName: "Märkische Kiste",
        companyId: 1,
        co2Saving: 5,
        timestamp: moment("2017-10-25")
    },
    {
        name: "Fenster saniert",
        companyName: "Dreusicke",
        companyId: 1,
        co2Saving: 15,
        timestamp: moment("2018-10-09")
    }
]

xdescribe('get measure', () => {
    let id;

    beforeAll(async () => {
        id = await measureModel.insertMeasure(testData[0])
    })

    afterAll(async() => {
        await measureModel.deleteMeasure(id)
    })

    it('should get the measure', async () => {
        const measure = await measureModel.getMeasure(id)
        expect(measure).toBeDefined()
    })
})

xdescribe('get latest measures', () => {
    let insertIds = []
    let measures;

    beforeAll((done) => {
        let promises = []
        testData.forEach((testMeasure) => {
            promises.push(measureModel.insertMeasure(testMeasure))
        })
    
        Promise.all(promises).then((ids) => {
            insertIds = ids
            done()
        })
    })
    
    afterAll((done) => {
        let promises = []
        insertIds.forEach((insertId) => {
            promises.push(measureModel.deleteMeasure(insertId))
        })
    
        Promise.all(promises).then(done)
    })
    
    it('should return requested number of elements', async () => {
        measures = await measureModel.getLatestMeasures(3)
        expect(measures).toHaveLength(3)
    })

    it('should be ordered by descending date', async () => {
        measures = await measureModel.getLatestMeasures(3)
        // expect before to be false and not after to be true in case of dates being equal
        expect(moment(measures[0].timestamp).isBefore(measures[1].timestamp)).toBeFalsy()
        expect(moment(measures[1].timestamp).isBefore(measures[2].timestamp)).toBeFalsy()
    })
})

xdescribe('insert measure', () => {
    let id

    afterAll(async () => {
        if(id !== undefined) {
            await measureModel.deleteMeasure(id)
        }
    })

    it('should add the measure', async () => {
        id = await measureModel.insertMeasure(testData[0])
        const measure = await measureModel.getMeasure(id)
        expect(measure).toBeDefined()
    })
})

xdescribe('delete measure', () => {
    it('should delete the measure', async () => {
        const id = await measureModel.insertMeasure(testData[0])
        const affectedRows = await measureModel.deleteMeasure(id)
        expect(affectedRows).toBe(1)
    })
})
