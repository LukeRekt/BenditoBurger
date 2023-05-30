const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//importar controllers
const { register, login, logout, getLoggedInUser, getMembership, AddDays, listarUsers, registro} = require("../controllers/user")

const { userRegisterValidator, userById, getUserPermission } = require('../middlewares/user')
const { verifyToken } = require("../middlewares/auth");


//api routes

router.post("/registrar", verifyToken, userById, getUserPermission, register);
router.post("/registro", registro);
router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);

router.get("/getusermembership", verifyToken, userById, getMembership);

router.post("/adddays", verifyToken, userById, getUserPermission, AddDays);

router.get("/admin", verifyToken, userById, getUserPermission);

router.get("/listarusers", verifyToken, userById, getUserPermission, listarUsers);


//animes




module.exports = router;