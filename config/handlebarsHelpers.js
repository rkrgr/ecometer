const moment = require('moment')

module.exports = {
    formatDateTime: (dateTime) => {
        return moment(dateTime).format("D.M.YYYY")
    },
    selected: (arg1, arg2) => {
        if (arg1 == arg2) {
            return " selected";
        }
        return "";
    }
}
