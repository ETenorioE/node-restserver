const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        this.usuariosPath= '/api/usuarios'


        //Middlewares //Son funciones que añaden otra funcionalidad.
        this.middleware();

        //Rutas de la App
        this.routes();
    }
    
    middleware(){
        //CORS . Permite el acceso y la denegación al endPoint. Logrando que adminta o no una o muchas url 
        this.app.use(cors());

        //Lectura y Parseo del Body  .Toda información que llegue lo serializará a formato JSON
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'))
    }


    routes(){
        //Ruta del API de Usuarios
        this.app.use(this.usuariosPath,require('../routes/usuarios'))


    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor en marcha - Puerto :', this.port);
        });
        
    }

}

module.exports= Server;
