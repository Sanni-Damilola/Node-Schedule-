const schedule = require("node-schedule");

const rule = new schedule.RecurrenceRule();

rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 18;
rule.minute = 36;

const setRule = schedule.scheduleJob(rule, () => {
//   console.log("Happy Birthay Tolu");
});

const rule1 = new schedule.RecurrenceRule();
rule1.minute = 39;

const job = schedule.scheduleJob(rule1, function () {
  console.log("The answer to life, the universe, and everything!");
});
