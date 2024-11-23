const express = require('express');
const mongoose = require('mongoose');
const filmsRoutes = require('./src/routes/filmsRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Conectar com o MongoDB Atlas
mongoose.connect('mongodb+srv://XXXXXXX@filmsapi.hhey4.mongodb.net/?retryWrites=true&w=majority&appName=FilmsApi')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB', err));

app.use(express.json());

app.use(filmsRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});