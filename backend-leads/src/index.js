require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');

const leadRoutes = require('./routes/leadRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/leads', leadRoutes);


sequelize.sync()
  .then(() => {

    console.log('Base de datos conectada');

    app.listen(process.env.PORT, () => {

      console.log(`Servidor corriendo en puerto ${process.env.PORT}`);

    });

  })
  .catch(error => {

    console.error(error);

  });