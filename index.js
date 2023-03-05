const schedule = require("node-schedule");

// let date = new Date("2023-03-05T13:41:00.867Z");
// const setDateSchedule = schedule.scheduleJob(date, () => {
//   console.log("Done on ", new Date().toDateString());
// }); // runing this function at a paricular time which is on line 5

const doThisInThisTime = new Date("2023-03-05T14:24:00.273Z");
// console.log(doThisInThisTime);

const job = schedule.scheduleJob(doThisInThisTime, function () {
  //   console.log("I'm on ", new Date());
}); // Run the function on every {"2023-03-05T14:14:00.273Z"}

const repeat = schedule.scheduleJob("* * * * * *", () => {
  console.count("job");
}); // repeate

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
