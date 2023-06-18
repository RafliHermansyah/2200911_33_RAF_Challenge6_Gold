const router = require("express").Router();
const UserGameController = require("./user_game_controller");

const controller = new UserGameController();

router.get("/", controller.login);
router.get("/user_games", controller.index);
router.get("/create", controller.create);
router.get("/:id", controller.show);
router.get("/:id/edit", controller.edit);
router.get("/:id/delete", controller.delete);

router.post("/loginAdmin", controller.loginAdmin);
router.post("/store", controller.store);
router.post("/:id/update", controller.update);

module.exports = router;
