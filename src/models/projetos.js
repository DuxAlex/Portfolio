import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    imagem: {type: String},
    tecnologias: [{type: String}],
    descricao: {tpe: String},
    categoria: {type: String, required:true},
    data: {type: Date},
    concluido: {type: Boolean},
    link: {type: String},

});

const Projeto = mongoose.model ("Projeto", projetoSchema);

export default Projeto;