const schedule = require("node-schedule");

const rule = new schedule.RecurrenceRule();

rule.hour = 18
rule.minute = 20



// const rule = new schedule.RecurrenceRule();
// rule.minute = 42;

// const job = schedule.scheduleJob(rule, function () {
//   console.log("The answer to life, the universe, and everything!");
// });