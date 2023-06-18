const models = require("../../models");

class UserGameController {
  // view
  async login(req, res) {
    res.render("login", { errorMessage: "" });
  }

  async index(req, res) {
    const listOfUSerGames = await models.usergame.findAll();

    res.render("index", {
      data: listOfUSerGames,
    });
  }
  async create(req, res) {
    res.render("create");
  }
  async edit(req, res) {
    const { id } = req.params;
    const userGame = await models.usergame.findOne({
      where: {
        id: id,
      },
    });
    res.render("edit", {
      data: userGame,
    });
  }
  async show(req, res) {
    const { id } = req.params;
    const userGame = await models.usergame.findOne({
      where: {
        id: id,
      },
      include: [models.userscore],
    });

    res.render("show", {
      data: userGame,
    });
  }

  // action
  async loginAdmin(req, res) {
    const { username, password } = await req.body;

    if (username == "admin" && password == "admin") {
      return res.redirect("/login/user_games");
    } else {
      return res.render("login", { errorMessage: "Wrong password" });
      // return res.render("login", { error: "invalid credential" });
    }
  }

  async store(req, res) {
    const { username, password } = req.body;

    await models.usergame.create({
      username: username,
      password: password,
    });

    return res.redirect("/login/user_games");
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    await models.usergame.update(
      {
        username,
        password,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.redirect("/login/user_games");
  }

  async delete(req, res) {
    const { id } = req.params;

    await models.usergame.destroy({
      where: {
        id,
      },
    });

    return res.redirect("/login/user_games");
  }
}

module.exports = UserGameController;
