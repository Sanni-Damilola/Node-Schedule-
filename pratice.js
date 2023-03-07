
const node_schedule = require("node-schedule")


const check = node_schedule.scheduleJob("0 * * * * *", () => {
  // console.log("Done on", new Date().getSeconds());
})


const recurrenceRule = new node_schedule.RecurrenceRule()
let range = new node_schedule.Range()
console.log("RecurrenceRule", recurrenceRule);
console.log("range", range);

console.log("");
recurrenceRule.dayOfWeek = [0, new node_schedule.Range(4, 6)]



// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
