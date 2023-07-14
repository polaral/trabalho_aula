const express = require('express')
const divisao =express ()
const bodyParser = require ('body-parser') 
const port = 3000 //portao padrao

    divisao.use(bodyParser.urlencoded({extended: true}));
    divisao.use(bodyParser.json());

 const router = express.Router();
 router.get('/', (req, res) => res.json({message: 'funcionando!'}));

    //GET / aplaicarDesconto

router.get('/aplicarDesconto/:valor', (req, res) => {
    const valor =parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)
    res.json({valorDescontado: ((valor * 0.18))})
})

    divisao.use('/', router)
        if(require.main === module){
            //inici o servidor
    divisao.listen(port)
 console.log('API funcionando!')
        }

module.exports = divisao