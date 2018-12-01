const mongoose=require('mongoose')
let PostModel=new mongoose.Schema({
    nombre: String,
    compañia: String,
    juegos: int,
});
module.exports =mongoose.model('Post',PostModel);