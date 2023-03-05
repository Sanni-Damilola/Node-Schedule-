const schedule = require("node-schedule");

// let date = new Date("2023-03-05T13:41:00.867Z");
// const setDateSchedule = schedule.scheduleJob(date, () => {
//   console.log("Done on ", new Date().toDateString());
// }); // runing this function at a paricular time which is on line 5

const doThisInThisTime = new Date();


// const job = schedule.scheduleJob("* * * * * sun", function () {
//   console.log("The answer to life, the universe, and everything!");
//   const schedule = require("node-schedule");
// });

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
