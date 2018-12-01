const mongoose = require('mongoose')
postModel=require ('../models/Post');

const UserController={}
// funcion para crear nuevo
UserController.create=function(req,res){
    let data ={
        nombre:req.body.nombre,
        compañia:req.body.compañia,
        juegos:req.body.juegos,
    };
    if(data.nombre&&data.compañia && data.nombre!="&& data.compañia!="){
        let nuevoPost=new postModel(data);
        nuevoPost.save(function(err,guardado){
            if(err){
                res.status(500);
                res.json({code:500,err});
            }else{
                res.json({ok:true,message:'Se guardo con Exito',guardado});
            }
        });
    }else{
        res.status(400);
        res.json({err:{code:400,message:'Faltan Datos a ingresar',guardado}});
    }
};
//todos
UserController.getAll=function(req,res){
    postModel.find({},function(err,posts){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,posts});
        }
    });
}

//Funcion para modificar registro
UserController.update=function(req,res){
    let update={
        nombre:req.body.nombre,
        compañia:req.body.compañia,
        juegos:req.body.juegos,
    };
    postModel.findByIdAndUpdate(req.params.Id,update,function(err,old){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,old,update})
        }
    });
}
//funcion para eliminar un registro
UserController.delete=function(req,res){
    postModel.delete({_id:req.params.id},function(err,eliminado){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,eliminado});
        }
    });
}

module.exports=UserController;