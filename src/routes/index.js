import Router from "express"

const router = Router();

router.get ("/", function(req, res){
    res.status(200).send({
        tittler: "hello world! Bem vindos api de projetos pessoais!",
        version:"1.0.0",
    });
});

export default router;