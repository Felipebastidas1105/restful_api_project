const express = require('express') // Para incluir el Framework
const app = express(); // Instancia del framework express
const morgan = require('morgan');//Información de las peticiones
const bodyParser = require('body-parser');//Para recibir peticiones 

if (process.env.NODE_ENV !== "production") {//Validamos que no estemos en el ambiente de producción 
    //Se carga la configuración .env al process.env
    require('dotenv').config();//Incluimos la libreria dotenv para trabajar con el archivo .ENV
}

app.set('port', process.env.PORT || 5000) //Se define el puerto en el que se ejecutara la aplicación 

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))// Recibir datos forularios sencillos
app.use(bodyParser.json()) // Para recibir formato JSON
app.use(morgan('dev')) // Define como llegara la información de la peticion en la consola

//Routes 
app.use('/api/v1/users', require('./api/v1/routes/users.routes'))
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'))
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'))

app.get('/api/v1/test',(req,res)=>{
    res.send('Hello ADSO')
})

app.listen(app.get('port'), () => { // Inicia la aplicación 
    console.log(`Server runing on localhost:${app.get('port')}`);
})

