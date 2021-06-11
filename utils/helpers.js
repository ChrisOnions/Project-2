const moment = require("moment");
// Helpers
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },

  format_date: (date) => {
    return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  // Checks the formatted current date Vs the formatted expiry date

  expired: (expiryDate) => {
    const currentDate = moment().format("YYYY-MM-DD");
    console.log(currentDate);
    if (currentDate < expiryDate) {
      return `expires`;
    } else {
      return `expired`;
    }
  },
};
