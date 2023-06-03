const mongoose = require("mongoose");

const pedidosSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
        telefone: {
			type:Number,
			required: true,
		},
        cpf: {
			type:Number,
			required: true,
            max:11, 
		},
        pedidoConteudo: {
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
            default: "Preparando"
		},
        isActive: {
			type: Boolean,
			default: false,
		},
		
	},
);

module.exports = mongoose.model("Pedidos", pedidosSchema);