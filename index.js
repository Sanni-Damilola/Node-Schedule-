const schedule = require("node-schedule");

const doThisInThisTime = new Date("2023-03-05T14:24:00.273Z");
// console.log(doThisInThisTime);

const job = schedule.scheduleJob(doThisInThisTime, function () {
  //   console.log("I'm on ", new Date());
}); // Run the function on every {"2023-03-05T14:14:00.273Z"}

let repeteCurrentDay = new Date().getDay(); // getting current day
const repeat = schedule.scheduleJob(`* * * * * ${repeteCurrentDay}`, () => {
  //   console.count("on");
}); // repeate

let start = 0;
let cancel = 5;

const start_Cancel = schedule.scheduleJob(`*/2 * * * * *`, function () {
  //   console.count();
  start++;
  if (start === cancel) {
    start_Cancel.cancel();
  }
}); // cancel when condition as been meet

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 16;
rule.minute = 57;

const check = schedule.scheduleJob(rule, function () {
  // console.log("Today is recognized by Rebecca Black!");
});
