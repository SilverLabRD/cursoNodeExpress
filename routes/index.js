const express = require('express');
const router = express.Router();

var viewBag = {};

viewBag.mensaje = 'Mensaje desde el mas alla';

router.get('/', (req, res) => {
  res.render('index', viewBag);
});


module.exports = router;
