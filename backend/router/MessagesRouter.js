const Router = require("express").Router;
const MessagesController = require("../controllers/messages-controller");
const {body} = require('express-validator');

const MessagesRouter = new Router();

MessagesRouter.post("/sendmessage", MessagesController.getMessages);

module.exports = MessagesRouter;
