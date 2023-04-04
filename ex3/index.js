const moment = require('moment');

console.log('Current date:', moment().format('MMMM Do YYYY'));

const sinceDate = moment('1976-11-26');
const yearsSince = moment().diff(sinceDate, 'years');

console.log('Years since 1976-11-26:', yearsSince);