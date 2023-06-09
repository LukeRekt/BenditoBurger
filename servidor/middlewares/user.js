const User = require("../models/user")

exports.userRegisterValidator = (req, res, next) => {
    console.log(req.body)
    //usuario nao eh null
    req.check("username", "Usuario e obrigatorio").notEmpty();

    req.check("email", "Email eh necessario").notEmpty();
    req.check("email", "Email Invalido").isEmail();

    //check pass
    req.check("password", "Senha eh necessaria").notEmpty();
    req.check("password").isLength({ min: 6 })
        .withMessage("A senha deve conter ao menos 6 caracteres");

    req.check("password", "A senha deve conter pelo menos, uma letra maiuscula, uma letra minuscula, um numero e um caractere especial.").matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i");
    req.check("totalTime", "Usuario e obrigatorio").notEmpty();
    //testar erros
    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({
            error: firstError,
        });
    }
    next();

};

exports.userById = async (req, res, next) => {
    User.findById(req._id).exec((err, user) => {
        if (err || !user) {
            return res.status(404).json({
                error: "Usuario nao encontrado",
            });
        }
        //adicionar objeto de usuario na req com todas as infos
        req.user = user;

        next();
    });
};

exports.getUserPermission = (req, res, next) => {

     console.log(req);

    if(req.user.isAdmin === false){
        console.log(req);
        return res.status(403).json({
            error: "Voce nao tem permissao para acessar este conteudo!",
        });
    }
    next();

    
}