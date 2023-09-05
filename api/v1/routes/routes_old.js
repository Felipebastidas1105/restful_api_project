const db =  require('../../../models'); //Requerimos los modelos
const {Router} = require('express') // Requerimos Router del Framewokr
const router = new Router() // Creamos una instancia del router 

router.get('/' ,(req,res)=>{
    console.log("Get principal route")
    res.send({title: "Saludos ADSO!"})
})
router.post('/new', async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    try {
        await db.User.create(
            {
                name,
                email,
                phone,
                password
            }
        )
        res.status(200).send({status: "OK", message: "the user has be created"})
    } catch (error) {
        res.status(400).send('User could not be created')
    }
})
router.get('/all',async (req,res)=>{
    try {
        let users = await db.User.findAll();
        res.status(200).send({status: "OK", message: "the users is loaded",data:users})
    } catch (error) {
        res.status(400).send({status: "FAIL", message: "Users error!",data:null})
    }
})
router.get('/:id', async (req,res)=>{
    try {
        let  id = req.params.id;
        let user = await db.User.findByPk(id)
        res.status(200).send({status: "OK", message: "the user is loaded",data:user})
    } catch (error) {
        res.status(400).send({status: "FAIL", message: "Error find user!"})
    }
})
router.put('/edit', async(req,res)=>{
    
    let {id,name,email,phone,password}= req.body;

    try {
        await db.User.update(
            {
                name,
                email,
                phone,
                password
            },
            {
                where: {
                    id:id
                }
            }
        )
        res.status(200).send({status: "OK", message: "the user is updated"})
    } catch (error) {
        res.status(400).send({status: "FAIL", message: "Error could has ben edit user"})
    }
})
router.delete('/delete/:id', async (req,res)=>{
    try {
        let id = req.params.id;
        await db.User.destroy({where:{id}})
        res.status(200).send({status: "OK", message: "the user is deleted"})
    } catch (error) {
        res.status(400).send({status: "FAIL", message: "Error could has ben edit user"})
    }
})
module.exports = router;