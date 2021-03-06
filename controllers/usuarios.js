const {response, request}= require('express')

//GET

const usuariosGet= (req=request, res=response) => {
    //Lo que esta entre las llaves, filtra lo que solamente voy a requerir de todo lo que envíen en la url
    const {q,cumple, api="no name",page=1} = req.query;

    res.json({
        msg: 'get API - Controllers',
        q,
        cumple,
        api,
        page,
    });
}

//POST


const usuariosPost=(req, res=response) => {
    //Lo que esta entre las llaves, filtra lo que solamente voy a requerir de todo lo que envíen en la url
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API- Controllers',
        nombre,
        edad,
    });
}

//PUT

const usuariosPut=(req, res=response) => {
    const {id} = req.params

    res.json({
        msg: 'put API- Controllers',
        id
    });
}


//DELETE


const usuariosDelete=(req, res=response) => {
    res.json({
        msg: 'delete API- Controllers'
    });
}


//PATCH


const usuariosPatch=(req, res=response) => {
    res.json({
        msg: 'patch API- Controllers'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}