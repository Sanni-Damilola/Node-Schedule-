const file = require("node-schedule");

let date = new Date("2023-03-05T16:52:00.318Z");

const schedule = file.scheduleJob(date, () => {
  console.log("done", new Date());
});
