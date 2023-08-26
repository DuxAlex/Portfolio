import projetos from "../models/projetos.js";
class ProjetoController{
    static getAllProjetos = (req, res) => {
        projetos.find((err, projetos)=>{
            res.status(200).json(projetos);

        });
    };
    //AQUI ADICIONAMOS MAIS FUNÇOES DO CRUD

    static createProjetos = (req, res) => {
        let projeto = new projetos(req.body);
    
        projeto.save((err) => {
          if (err) {
            res
              .status(500)
              .send({ message: `${err.message} - falha ao cadastrar projetos` });
          } else {
            res.status(201).send(projeto.toJSON());
          }
        });
      };

      static getByIdProjetos = (req, res) => {
        const id = req.params.id;
    
        projetos.findById(id, (err, projetos) => {
          if (err) {
            res
              .status(400)
              .send({ mensage: `${err.message} - Id do projeto não localizado` });
          } else {
            res.status(200).send(projetos);
          }
        });
      };

    static updateProjetos =(req,res) =>{
        const id = req.params.id;

        projetos.findByIdAndUpdate(id, { $set: req.body },(err) =>{
            if ( !err ) {
                res.status (200).send({ message: "projetos atualizados com sucesso"});
            }else{
                res.status(500).send({ message: err.message });
            }
        })
    };

    static deleteProjetos = (req, res) => {
        const id = req.params.id;

        projetos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Projeto removido com sucesso."});
            } else {
                res.status(500).send({ message: err.message});
            }
        });
    };
    
};// AQUI FECHA A CLASSE CONTROLADORA

export default ProjetoController;