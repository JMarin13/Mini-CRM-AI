const express = require('express');

const router = express.Router();

const {
  crearLead,
  obtenerLeads,
  obtenerLead,
  actualizarLead,
  eliminarLead
} = require('../controllers/leadController');


router.post('/', crearLead);

router.get('/', obtenerLeads);

router.get('/:id', obtenerLead);

router.put('/:id', actualizarLead);

router.delete('/:id', eliminarLead);

module.exports = router;