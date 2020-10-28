const { table } = require("table");

const config = {
  columns: {
    0: {
      alignment: "left",
      width: 4,
    },
    1: {
      alignment: "center",
      width: 40,
    },
    2: {
      alignment: "center",
      width: 4,
    },
    3: {
      alignment: "center",
      width: 7,
    },
  },
};

exports.draw = function (data) {
  return table(data, config);
};
