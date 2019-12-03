const measureModel = require("../db/models/measure.db");

module.exports = {
    getLatestMeasures: (num) => {
        return measureModel.getLatestMeasures(num);
    }
};