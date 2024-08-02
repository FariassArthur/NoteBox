"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.post("/", UserController_1.createUser);
router.get("/:id", UserController_1.takeUser);
router.get("/", UserController_1.takeAllUsers);
router.delete("/:id", UserController_1.deleteUser);
router.patch("/:id", UserController_1.updateUser);
exports.default = router;