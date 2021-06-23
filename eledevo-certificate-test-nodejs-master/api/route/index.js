module.exports = function (app) {
  var controller = require("../controller/index");

  app.route("/item")
  .get(controller.read_item)
  .post(controller.create_item);

  app.route("/item/:id")
    .put(controller.update_item)
    .delete(controller.delete_item);
};
