# SGL Landing Page

Landing page para SGL con manejo de variables de entorno.

## 🚀 Configuración Inicial

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
Copia el archivo de ejemplo y configura tus variables:
```bash
# En Windows
copy env.example .env

# En Linux/Mac
cp env.example .env
```

### 3. Editar el archivo .env
Abre el archivo `.env` y configura las variables según tus necesidades:

```env
# Configuración del servidor
PORT=3000

# Configuración de la API
API_ENDPOINT=https://tu-api-real.com/lead

# Configuración de la aplicación
APP_NAME=SGL Landing
APP_VERSION=1.0.0

# Configuración de validación
MIN_NAME_LENGTH=3
DNI_LENGTH=8
PHONE_LENGTH=9

# Configuración de mensajes
MESSAGE_SENDING=Enviando...
MESSAGE_SUCCESS=¡Datos enviados con éxito!
MESSAGE_ERROR=Error al enviar. Inténtalo de nuevo.
MESSAGE_ERROR_DETAIL=Error en la solicitud:

# Configuración de colores para mensajes
COLOR_SUCCESS=#a5d6a7
COLOR_ERROR=#ff8a80
COLOR_DEFAULT=#fff

# Tiempo de expiración de mensajes (en milisegundos)
MESSAGE_TIMEOUT=5000
```

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
# Construir y servir con live-server (desarrollo)
npm run dev

# Solo construir los archivos
npm run build

# Servir con Express (producción)
npm run start

# Solo servir con Express (sin rebuild)
npm run serve
```

### Configuración
```bash
# Crear archivo .env desde ejemplo
npm run setup
```

## 📁 Estructura del Proyecto

```
LANDING/
├── ASSETS/                 # Imágenes y recursos
├── dist/                   # Archivos construidos (generado)
├── .env                    # Variables de entorno (crear desde env.example)
├── env.example            # Ejemplo de variables de entorno
├── build.js               # Script de construcción
├── server.js              # Servidor Express
├── sglLanding.html        # HTML principal
├── sglLanding.css         # Estilos
└── package.json           # Dependencias y scripts
```

## 🔧 Variables de Entorno

### Variables Principales
- `PORT`: Puerto del servidor (default: 3000)
- `API_ENDPOINT`: URL del endpoint de la API
- `APP_NAME`: Nombre de la aplicación
- `APP_VERSION`: Versión de la aplicación

### Variables de Validación
- `MIN_NAME_LENGTH`: Longitud mínima de nombres
- `DNI_LENGTH`: Longitud del DNI
- `PHONE_LENGTH`: Longitud del teléfono

### Variables de Mensajes
- `MESSAGE_SENDING`: Mensaje de envío
- `MESSAGE_SUCCESS`: Mensaje de éxito
- `MESSAGE_ERROR`: Mensaje de error
- `MESSAGE_ERROR_DETAIL`: Detalle del error

### Variables de Colores
- `COLOR_SUCCESS`: Color para mensajes de éxito
- `COLOR_ERROR`: Color para mensajes de error
- `COLOR_DEFAULT`: Color por defecto

### Variables de Tiempo
- `MESSAGE_TIMEOUT`: Tiempo de expiración de mensajes (ms)

## 🚨 Solución de Problemas

### El API_ENDPOINT no se actualiza
1. Verifica que el archivo `.env` existe
2. Asegúrate de que la variable `API_ENDPOINT` esté correctamente definida
3. Ejecuta `npm run build` para regenerar los archivos
4. Reinicia el servidor

### El puerto no cambia
1. Verifica que la variable `PORT` esté definida en `.env`
2. Reinicia el servidor después de cambiar la variable

### Debug de configuración
El comando `npm run build` mostrará la configuración cargada en la consola.

## 🔍 Endpoints Disponibles

- `GET /`: Página principal
- `GET /health`: Estado del servidor y configuración

## 📝 Notas Importantes

- El archivo `.env` está en `.gitignore` por seguridad
- Siempre usa `env.example` como base para crear tu `.env`
- Las variables se cargan al momento de construir (`npm run build`)
- Para cambios en variables de entorno, ejecuta `npm run build` nuevamente 