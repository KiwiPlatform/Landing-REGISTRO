const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'sglLanding.html'));
});

// Endpoint de salud
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        config: {
            API_ENDPOINT: process.env.API_ENDPOINT || 'not set',
            APP_NAME: process.env.APP_NAME || 'SGL Landing',
            PORT: process.env.PORT || 3000
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📁 Archivos servidos desde: ${path.join(__dirname, 'dist')}`);
    console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API Endpoint: ${process.env.API_ENDPOINT || 'not set'}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
}); 