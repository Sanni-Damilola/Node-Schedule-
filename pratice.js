const schedule = require("node-schedule");
// console.log(schedule);

// scheduleJob
// cancelJob
// RecurrenceRule
// Range

const date = new Date("2023-03-05T20:13:00.166Z");
// console.log(date);

const job = schedule.scheduleJob("any", "* * * * * sun", () => {
  console.log("Hello, This is the Time", new Date());
  schedule.cancelJob("any");
});


// const 

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
