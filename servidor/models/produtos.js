const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
        preco: {
			type:Number,
			required: true,
		},
        descricao: {
			type: String,
			required: true,
		},
		imagem: {
			type: String,
			required: true,
		},
		ingredientes: {
			type: Array,
            required: true,
		},
        isActive: {
			type: Boolean,
            default: true,
		},
		slug: {
			type: String,
			required: true,
		},
		
	},
);

module.exports = mongoose.model("Products", productSchema);