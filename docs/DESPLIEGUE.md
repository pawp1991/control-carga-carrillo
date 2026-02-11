# Guía de Despliegue

Esta guía explica cómo desplegar la aplicación Control de Carga de Teca en diferentes plataformas.

## Despliegue en Vercel (Recomendado)

Vercel es la forma más fácil de desplegar aplicaciones React.

### Pasos:

1. Crear cuenta en [Vercel](https://vercel.com)
2. Instalar Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. En la carpeta del proyecto:
   ```bash
   vercel
   ```
4. Seguir las instrucciones en pantalla

### Despliegue desde GitHub:

1. Push del código a GitHub
2. Importar el repositorio en Vercel
3. Configurar:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

## Despliegue en Netlify

1. Crear cuenta en [Netlify](https://netlify.com)
2. Conectar repositorio de GitHub
3. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

## Despliegue en GitHub Pages

1. Instalar gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Actualizar `package.json`:
   ```json
   {
     "homepage": "https://tu-usuario.github.io/control-carga-teca",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Actualizar `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/control-carga-teca/',
     // ...
   })
   ```

4. Desplegar:
   ```bash
   npm run deploy
   ```

## Despliegue en Servidor Propio

### Con Nginx:

1. Compilar la aplicación:
   ```bash
   npm run build
   ```

2. Copiar contenido de `dist/` al servidor

3. Configurar Nginx:
   ```nginx
   server {
     listen 80;
     server_name tu-dominio.com;
     root /ruta/a/dist;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. Reiniciar Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Despliegue con Docker

1. Crear `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Construir imagen:
   ```bash
   docker build -t control-carga-teca .
   ```

3. Ejecutar contenedor:
   ```bash
   docker run -p 80:80 control-carga-teca
   ```

## Variables de Entorno

La aplicación actualmente no requiere variables de entorno. Si necesitas agregar configuraciones:

1. Crear archivo `.env`:
   ```
   VITE_API_URL=https://api.ejemplo.com
   ```

2. Usar en el código:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Notas Importantes

- Los datos se almacenan localmente en el navegador usando Storage API
- Para almacenamiento en servidor, se requiere implementar un backend
- Asegúrate de configurar HTTPS en producción
- Considera implementar backup de datos regularmente

## Soporte

Si tienes problemas con el despliegue, abre un issue en GitHub.
