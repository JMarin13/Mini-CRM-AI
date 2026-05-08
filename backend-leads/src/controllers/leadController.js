const Lead = require('../models/Lead');

const { analizarLead } = require('../services/openaiService');


const crearLead = async (req, res) => {

  try {

    // Analizar con IA

    const analisisIA = await analizarLead(req.body);


    // Crear lead completo

    const lead = await Lead.create({

      ...req.body,

      prioridadIA: analisisIA.prioridadIA,

      resumenIA: analisisIA.resumenIA,

      recomendacionComercial:
        analisisIA.recomendacionComercial

    });


    res.status(201).json(lead);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      mensaje: error.message
    });

  }

};


// Obtener todos
const obtenerLeads = async (req, res) => {

  try {

    const leads = await Lead.findAll();

    res.json(leads);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};


// Obtener por ID
const obtenerLead = async (req, res) => {

  try {

    const lead = await Lead.findByPk(req.params.id);

    if (!lead) {

      return res.status(404).json({
        mensaje: 'Lead no encontrado'
      });

    }

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};


// Actualizar
const actualizarLead = async (req, res) => {

  try {

    const lead = await Lead.findByPk(req.params.id);

    if (!lead) {

      return res.status(404).json({
        mensaje: 'Lead no encontrado'
      });

    }

    await lead.update(req.body);

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};


// Eliminar
const eliminarLead = async (req, res) => {

  try {

    const lead = await Lead.findByPk(req.params.id);

    if (!lead) {

      return res.status(404).json({
        mensaje: 'Lead no encontrado'
      });

    }

    await lead.destroy();

    res.json({
      mensaje: 'Lead eliminado'
    });

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    });

  }

};


module.exports = {
  crearLead,
  obtenerLeads,
  obtenerLead,
  actualizarLead,
  eliminarLead
};