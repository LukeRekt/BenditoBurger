const mongoose = require("mongoose");

const pedidosSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
        telefone: {
			type:String,
			required: true,
		},
        cpf: {
			type:String,
			required: true,
            min:12, 
            max:12, 
		},
        pedidoConteudo: {
			type: Array,
			required: true,
		},
		removerIngredientes: {
			type: Array,
			required: true,
		},
		observacao: {
			type: String,
			required: false,
		},
        
        dataCriacao: {
			type: Date,
			default: Date.now()
		},
        estado: {
			type: String,
			required: false,
            default: "Pendente"
		},
		rua: {
			type: String,
			required: false,
		},
		bairro: {
			type: String,
			required: false,
		},
		complemento: {
			type: String,
			required: false,
		},
		cep: {
			type: String,
			required: false,
		},
		pontoReferencia: {
			type: String,
			required: false,
		},
        isActive: {
			type: Boolean,
			default: false,
		},
		
	},
);

module.exports = mongoose.model("Pedidos", pedidosSchema);