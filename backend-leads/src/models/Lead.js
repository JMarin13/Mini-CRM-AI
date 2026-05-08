const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Lead = sequelize.define('Lead', {

  nombreEmpresa: {
    type: DataTypes.STRING,
    allowNull: false
  },

  contacto: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  industria: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descripcionNecesidad: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  prioridadIA: {
    type: DataTypes.STRING
  },

  resumenIA: {
    type: DataTypes.TEXT
  },

  recomendacionComercial: {
    type: DataTypes.TEXT
  }

});

module.exports = Lead;