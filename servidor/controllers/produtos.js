const Products = require("../models/produtos")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const fs = require('fs');
const { nextTick } = require("process");
require("dotenv").config();

exports.registrarProduto = async (req, res) => {
	console.log(req)

    
    //se novo user, criar novo produto
    const product = new Products(req.body);
    console.log(req.body)
    await product.save();
      console.log("Produto " + req.body.nome + " Cadastrado com sucesso!")
    res.status(201).json({
        message: "Produto cadastrado com sucesso!",
    });
};

exports.listarProdutos = async (req, res) => {
    //buscar usuario baseado no email

    await Products.find({}).exec((err, produtos) => {

        //retornar resposta para o usuario

        return res.json({
            produtos,
        });
    });
};




exports.EditProduto = async (req, res) => {
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

