const moment = require('moment');

const measureModel = require('../../db/models/measure.db');
const measureService = require('../../services/measure.service');

const latestMeasuresTestData = [
    {
        measureName: "PV-Anlage installiert",
        companyName: "Märkische Kiste",
        co2Value:    10,
        date:        moment("2019-11-25")
    },
    {
        measureName: "Hecken gepflanzt",
        companyName: "Märkische Kiste",
        co2Value:    5,
        date:        moment("2018-10-25")
    },
    {
        measureName: "Fenster saniert",
        companyName: "Dreusicke",
        co2Value:    15,
        date:        moment("2017-02-09")
    }
];

jest.mock('../../db/models/measure.db')

describe('get latest measures', () => {
    it('should return what it got from the model', async () => {
        measureModel.getLatestMeasures.mockResolvedValue(latestMeasuresTestData)
        expect(await measureService.getLatestMeasures(3)).toEqual(latestMeasuresTestData)
    })
})