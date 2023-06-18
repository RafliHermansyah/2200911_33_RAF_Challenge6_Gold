module.exports = (app) => {
  app.use("/login", require("./user_games"));
};
