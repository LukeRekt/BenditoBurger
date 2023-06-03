const Pedidos = require("../models/pedidos")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const fs = require('fs');
const { nextTick } = require("process");
require("dotenv").config();

exports.registrarPedidos = async (req, res) => {
	console.log(req)

    
    //se novo user, criar novo produto
    const pedido = new Pedidos(req.body);
    console.log(req.body)
    await pedido.save();
      console.log("Pedido " + req.body.nome + " Cadastrado com sucesso!")
    res.status(201).json({
        message: "Pedido cadastrado com sucesso!",
    });
};

exports.listarPedidos = async (req, res) => {
    //buscar usuario baseado no email

    await Pedidos.find({}).exec((err, pedidos) => {

        //retornar resposta para o usuario

        return res.json({
            pedidos,
        });
    });
};




exports.EditPedido = async (req, res) => {
    console.log(req.body)
    const dados = req.body
    console.log(req.body)
    const d = new Date(Date.now() + (3600 * 1000 * 24 * parseInt(dados.totalTime)))


    let tempo = new Date();

    console.log(d);

   

      const filter = {
         email: dados.email,
         }
      const update = {
         totalTime: d,
 };
 
      const doc = await User.findOneAndUpdate(filter, update, {
         returnOriginal: false,
         new: true, 
         upsert: true
      });
    
      res.status(200).json({ totalTime: doc.totalTime })
      //res.status(200).json({ totalTime: d })

    // console.log(req.body);
    // if(req.files == null){
    //     return res.status(200);    
    // }

}

