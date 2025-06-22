const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Cargar variables de entorno
const config = {
    API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8081/api/v1/leads',
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8081/api/v1',
    CLINICS_ENDPOINT: process.env.CLINICS_ENDPOINT || 'http://localhost:8081/api/v1/clinics',
    SPECIALTIES_ENDPOINT: process.env.SPECIALTIES_ENDPOINT || 'http://localhost:8081/api/v1/medical-specialties',
    APP_NAME: process.env.APP_NAME || 'SGL Landing',
    APP_VERSION: process.env.APP_VERSION || '1.0.0',
    MIN_NAME_LENGTH: process.env.MIN_NAME_LENGTH || 3,
    DNI_LENGTH: process.env.DNI_LENGTH || 8,
    PHONE_LENGTH: process.env.PHONE_LENGTH || 9,
    MESSAGES: {
        SENDING: process.env.MESSAGE_SENDING || 'Enviando...',
        SUCCESS: process.env.MESSAGE_SUCCESS || '¡Datos enviados con éxito!',
        ERROR: process.env.MESSAGE_ERROR || 'Error al enviar. Inténtalo de nuevo.',
        ERROR_DETAIL: process.env.MESSAGE_ERROR_DETAIL || 'Error en la solicitud:'
    },
    COLORS: {
        SUCCESS: process.env.COLOR_SUCCESS || '#a5d6a7',
        ERROR: process.env.COLOR_ERROR || '#ff8a80',
        DEFAULT: process.env.COLOR_DEFAULT || '#fff'
    },
    MESSAGE_TIMEOUT: process.env.MESSAGE_TIMEOUT || 5000
};

// Log de configuración para debug
console.log('=== CONFIGURACIÓN CARGADA ===');
console.log('API_ENDPOINT:', config.API_ENDPOINT);
console.log('CLINICS_ENDPOINT:', config.CLINICS_ENDPOINT);
console.log('SPECIALTIES_ENDPOINT:', config.SPECIALTIES_ENDPOINT);
console.log('APP_NAME:', config.APP_NAME);
console.log('PORT:', process.env.PORT || 3000);
console.log('============================');

// Leer el archivo HTML original
const htmlPath = path.join(__dirname, 'sglLanding.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Reemplazar el script env-loader.js con la configuración inyectada
const configScript = `
    <script>
        window.config = ${JSON.stringify(config, null, 2)};
    </script>
`;

// Reemplazar la línea que carga env-loader.js
html = html.replace(
    '<script src="./env-loader.js"></script>',
    configScript
);

// Escribir el archivo HTML procesado
const outputPath = path.join(__dirname, 'dist', 'sglLanding.html');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, html);

// Copiar otros archivos necesarios
const filesToCopy = ['sglLanding.css', 'ASSETS'];
filesToCopy.forEach(file => {
    const source = path.join(__dirname, file);
    const dest = path.join(__dirname, 'dist', file);
    
    if (fs.existsSync(source)) {
        if (fs.lstatSync(source).isDirectory()) {
            // Copiar directorio
            fs.cpSync(source, dest, { recursive: true });
        } else {
            // Copiar archivo
            fs.copyFileSync(source, dest);
        }
    }
});

console.log('Build completado! Archivos generados en /dist');
console.log('Configuración cargada desde .env'); 