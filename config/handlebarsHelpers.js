const moment = require('moment')

module.exports = {
    formatDateTime: (dateTime) => {
        return moment(dateTime).format("D.M.YYYY")
    }
}
