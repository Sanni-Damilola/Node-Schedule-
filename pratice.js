const file = require("node-schedule");

let date = new Date("2023-03-05T16:50:00.318Z");

const schedule =
  (date,
  () => {
    console.log("done", new Date());
  });
