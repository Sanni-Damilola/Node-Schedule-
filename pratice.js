const schedule = require("node-schedule");

const rule = new schedule.RecurrenceRule();

rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 18;
rule.minute = 20;

const setRule = schedule.scheduleJob(rule, () => {
  console.log("Happy Birthay Tolu");
});

// const rule = new schedule.RecurrenceRule();
// rule.minute = 42;

// const job = schedule.scheduleJob(rule, function () {
//   console.log("The answer to life, the universe, and everything!");
// });
