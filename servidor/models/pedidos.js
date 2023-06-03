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
        isActive: {
			type: Boolean,
			default: false,
		},
		
	},
);

module.exports = mongoose.model("Pedidos", pedidosSchema);