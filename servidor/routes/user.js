const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
//importar controllers
const {login, logout, getLoggedInUser} = require("../controllers/user")

const {userById, getUserPermission } = require('../middlewares/user')
const { verifyToken } = require("../middlewares/auth");
const { registrarProduto, listarProdutos } = require('../controllers/produtos');
const { registrarPedidos, listarPedidos } = require('../controllers/pedidos');


//api routes


router.post("/login", login);
router.get("/logout", logout)

router.get("/user", verifyToken, userById, getLoggedInUser);


router.get("/admin", verifyToken, userById, getUserPermission);

//produtos
router.post("/registrarproduto", verifyToken, userById, getUserPermission, registrarProduto);
router.get("/produtos", listarProdutos);

//pedidos
router.post("/registrarpedido", registrarPedidos);
router.get("/pedidos", verifyToken, userById, getUserPermission, listarPedidos);


module.exports = router;