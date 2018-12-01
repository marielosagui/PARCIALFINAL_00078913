var express = require('express');
var router = express.Router();
var UserController = require('controllers/UserController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/',UserController.getAll); //read
router.post('/',UserController.create);//crear
router.put('/:id',UserController.update);//actualizar
router.delete('/:id',UserController.delete) //eliminar

module.exports = router;

