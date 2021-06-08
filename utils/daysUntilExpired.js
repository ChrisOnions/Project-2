const moment = require("moment");

const daysUntilExpired = (expDate) => {
  const currentDate = moment();

  return currentDate.to(moment(expDate));
};

module.exports = daysUntilExpired;
