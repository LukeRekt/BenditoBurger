const User = require("../models/user")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const fs = require('fs');
const { nextTick } = require("process");
require("dotenv").config();

exports.register = async (req, res) => {
    //testar se o user ja existe
	console.log(req)
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });
    if (usernameExists) {
        return res.status(403).json({
            error: "Usuário já existe",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email já existe",
        });
    }
    
    //se novo user, criar novo user
    const user = new User(req.body);
    console.log(req.body)
    await user.save();
      console.log("Usuário " + req.body.username + " Cadastrado com sucesso!")
    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
};

exports.registro = async (req, res) => {
    //testar se o user ja existe
	console.log(req)
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });
    if (usernameExists) {
        return res.status(403).json({
            error: "Usuário já existe",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email já existe",
        });
    }
    
    //se novo user, criar novo user
    const user = new User(req.body);
    console.log(req.body)
    await user.save();
      console.log("Usuário " + req.body.username + " Cadastrado com sucesso!")
    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
};

exports.login = async (req, res) => {
    //buscar usuario baseado no email
    const { email, password } = req.body;

    await User.findOne({ email }).exec((err, user) => {
        //se der erro ou nenhum usuario encontrado
        if (err || !user) {
            return res.status(401).json({
                error: "Credenciais Inválidas",
            });
        }
        //se usuario foi encontrado, usar metodo de autencticacao do model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email ou senha inválidos",
            });
        }
        // gerar token como id do usuario e um jwt secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        });

        //persistir o token como "jwt" em um cookie com data de validade
        res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

        //retornar resposta para o usuario
        
        const { username } = user;
        const { isAdmin } = user;
        const { email } = user;
        const { totalTime } = user;
        console.log(totalTime)


        let data = new Date(totalTime);
        data.setDate(data.getDate());

        if(Date.now() > new Date(totalTime)){
            console.log("assinatura expirada")
            return res.status(403).json({
                error: "Seu login está expirado!",
            });

        }

        console.log("Usuário " + username + " Logado com sucesso!")
        return res.json({
            message: "Logado com sucesso!",
            username,
            isAdmin,
            email,
            token
        });
    });
};

exports.logout = (req, res) => {
    res.clearCookie("jwt");

    return res.json({
        message: "Deslogado com sucesso!",
    });
};

exports.getLoggedInUser = (req, res) => {
    const { username } = req.user;
    const { isAdmin } = req.user;
    const { email } = req.user;
    const { totalTime } = req.user;
        
    let check;

    let data = new Date(totalTime);

    data.setDate(data.getDate());
    var CurrentDate = new Date();

    if(CurrentDate > new Date(totalTime)){
        check = false;
    }else if(CurrentDate < new Date(totalTime)){
        check = true;
    }

    return res.status(200).json({
        message: "O Usuario ainda esta logado",
        username,
        isAdmin,
        email,
        check,
        isLogged: true,
    })
    
}


exports.buscarUser = async (req, res) => {
    //buscar usuario baseado no email
    const { username } = req.body;

    await User.findOne({ username }).exec((err, usuario) => {
        //se der erro ou nenhum usuario encontrado
        if (err || !usuario) {
            return res.status(401).json({
                error: "Credenciais Invalidas",
            });
        }
        //retornar resposta para o usuario
        const { username } = usuario;

        return res.json({
            message: "Usuário encontrado!",
            username,
        });
    });
};

exports.getMembership = async (req, res) => {
    //buscar usuario baseado no email
    const { username } = req.user;
    let check;
    await User.findOne({ username }).exec((err, usuario) => {
        //se der erro ou nenhum usuario encontrado
        if (err || !usuario) {
            return res.status(401).json({
                error: "Credenciais Invalidas",
            });
        }
        //retornar resposta para o usuario
        const { username } = usuario;
        const { totalTime } = usuario;
        
        let data = new Date(totalTime);

        data.setDate(data.getDate());

        if(data.getDate() > new Date(totalTime)){
            check = false;
        }else if(data.getDate() < new Date(totalTime)){
            check = true;
        }




        return res.json({
            message: "Usuário encontrado!",
            check,
        });
    });
};

exports.trocarAvatar = async (req, res) => {
    const { username } = req.user;
    const filename = req.files.screenshot.name;
    const file = req.files.screenshot;
    let uploadPath = __dirname + "../../public/imagens/avatars/" + filename;
    file.mv(uploadPath);
    const filter = {username: username}
    const update = { userAvatar: `static/imagens/avatars/${filename}`};
    
    const doc = await User.findOneAndUpdate(filter, update, {
    //   returnOriginal: false,
    //   new: true, 
    //   upsert: true
    });
    console.log(username)
    res.status(200).json({ novoAvatar: doc.userAvatar })
    // 
    // 
    // 
    // 
    
};
exports.AddDays = async (req, res) => {
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

exports.listarUsers = async (req, res) => {
    //buscar usuario baseado no email

    await User.find({}, {_id: 0, hashedPassword: 0, salt: 0, updatedAt: 0, isAdmin: 0, isActive: 0, __v: 0}).exec((err, users) => {

        //retornar resposta para o usuario
        
        return res.json({
            users,
        });
    });
};
