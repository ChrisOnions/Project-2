const moment = require("moment");

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
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
