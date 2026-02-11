# 📱 Guía Completa: PWA en GitHub Pages

Esta guía te llevará paso a paso para desplegar tu PWA en GitHub Pages.

## ✅ Archivos PWA Incluidos

El proyecto ya incluye todos los archivos necesarios para PWA:

- ✅ `public/manifest.json` - Configuración de la PWA
- ✅ `public/sw.js` - Service Worker para funcionalidad offline
- ✅ `public/icons/` - 8 iconos en diferentes tamaños (72px a 512px)
- ✅ `index.html` - Actualizado con metadatos PWA
- ✅ `.github/workflows/deploy.yml` - Despliegue automático con GitHub Actions
- ✅ `vite.config.js` - Configurado para GitHub Pages

## 🚀 Paso 1: Preparar el Repositorio

### 1.1 Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `control-carga-teca` (¡importante!)
3. Descripción: "PWA para control de carga de trozas de teca"
4. Público o Privado
5. **NO** marques ninguna opción de inicialización
6. Click "Create repository"

### 1.2 Subir Código a GitHub

```bash
# Navegar a la carpeta del proyecto
cd control-carga-teca

# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: PWA Control de Carga de Teca"

# Conectar con GitHub (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/control-carga-teca.git

# Cambiar a rama main
git branch -M main

# Subir código
git push -u origin main
```

## 🛠️ Paso 2: Configurar GitHub Pages

### 2.1 Habilitar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (Configuración)
2. En el menú izquierdo, click en **Pages**
3. En "Source" (Fuente), selecciona:
   - Source: **GitHub Actions**
4. ¡Eso es todo! No necesitas configurar nada más

### 2.2 Verificar el Workflow

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver un workflow corriendo llamado "Deploy to GitHub Pages"
3. Espera a que termine (toma ~2-3 minutos)
4. Cuando veas el ✅ verde, ¡tu app está desplegada!

## 🌐 Paso 3: Acceder a tu PWA

Tu app estará disponible en:
```
https://TU-USUARIO.github.io/control-carga-teca/
```

**Ejemplo:**
- Si tu usuario es `juanperez`, la URL será:
- `https://juanperez.github.io/control-carga-teca/`

## 📱 Paso 4: Instalar la PWA

### En Android (Chrome/Edge):

1. Abre la URL en Chrome
2. Aparecerá un banner "Agregar a pantalla de inicio"
3. O toca el menú (⋮) → "Agregar a pantalla de inicio"
4. La app se instalará como una app nativa

### En iOS (Safari):

1. Abre la URL en Safari
2. Toca el botón de compartir (□↑)
3. Scroll y toca "Agregar a pantalla de inicio"
4. Toca "Agregar"

### En Desktop (Chrome/Edge):

1. Abre la URL en Chrome o Edge
2. Mira el ícono de instalación (+) en la barra de direcciones
3. Click en "Instalar"
4. La app se abrirá como una ventana independiente

## 🔄 Paso 5: Actualizar la PWA

Cada vez que hagas cambios y subas a GitHub:

```bash
# Hacer cambios en tu código...

# Agregar cambios
git add .

# Commit
git commit -m "feat: descripción del cambio"

# Push
git push
```

GitHub Actions automáticamente:
1. Detectará el push
2. Compilará la aplicación
3. Desplegará la nueva versión
4. Los usuarios verán una notificación para actualizar

## ⚙️ Configuración Avanzada

### Cambiar el Nombre del Repositorio

Si tu repositorio no se llama `control-carga-teca`, actualiza:

**vite.config.js:**
```javascript
export default defineConfig({
  base: '/NOMBRE-DE-TU-REPO/', // Cambiar aquí
  // ...
})
```

**public/manifest.json:**
```json
{
  "start_url": "/NOMBRE-DE-TU-REPO/",
  // ...
}
```

### Dominio Personalizado

1. Compra un dominio (ej: controlteca.com)
2. En Settings → Pages → Custom domain
3. Ingresa tu dominio
4. Sigue las instrucciones para configurar DNS

## 🧪 Probar Localmente la PWA

```bash
# Compilar
npm run build

# Servir localmente
npm run preview

# O con un servidor HTTP simple
cd dist
python3 -m http.server 8000
```

Abre: http://localhost:8000

## 📊 Verificar PWA

### Lighthouse (Chrome DevTools)

1. Abre tu app en Chrome
2. F12 → Lighthouse
3. Selecciona "Progressive Web App"
4. Click "Generate report"
5. ¡Deberías tener 100 puntos! 🎯

### PWA Checklist:

- ✅ Manifest.json presente
- ✅ Service Worker registrado
- ✅ Funciona offline
- ✅ Iconos en múltiples tamaños
- ✅ HTTPS (automático en GitHub Pages)
- ✅ Responsive design
- ✅ Instalable

## 🐛 Solución de Problemas

### La página muestra 404

**Problema:** El base path no coincide con el nombre del repositorio

**Solución:**
```javascript
// vite.config.js
base: '/nombre-correcto-del-repo/'
```

### Los iconos no cargan

**Problema:** Rutas incorrectas en manifest.json

**Solución:** Verifica que todas las rutas en manifest.json empiecen con `/control-carga-teca/`

### El Service Worker no se registra

**Problema:** Puede ser cache del navegador

**Solución:**
1. F12 → Application → Service Workers
2. Click "Unregister"
3. Recarga la página

### GitHub Actions falla

**Problema:** Permisos de GitHub Pages

**Solución:**
1. Settings → Actions → General
2. Workflow permissions
3. Selecciona "Read and write permissions"
4. Save

## 📱 Características de la PWA

### ✅ Instalable
Los usuarios pueden instalar la app en su dispositivo

### ✅ Offline
Funciona sin conexión a internet

### ✅ Actualizable
Notifica automáticamente cuando hay actualizaciones

### ✅ Rápida
Precarga recursos para carga instantánea

### ✅ Fullscreen
Se abre como app nativa, sin barra del navegador

## 📈 Próximos Pasos

1. **Personaliza iconos**: Edita `generate-icons.py` y ejecuta `npm run generate-icons`
2. **Agrega screenshots**: Crea capturas para la PWA store
3. **Implementa push notifications**: Para notificar usuarios
4. **Agrega modo oscuro**: Mejora la experiencia
5. **Analytics**: Agrega Google Analytics para métricas

## 🎉 ¡Listo!

Tu PWA está:
- ✅ Desplegada en GitHub Pages
- ✅ Instalable en cualquier dispositivo
- ✅ Funcionando offline
- ✅ Con actualizaciones automáticas

**URL de tu app:**
```
https://TU-USUARIO.github.io/control-carga-teca/
```

## 📞 Soporte

¿Problemas? Abre un issue en GitHub con:
- Descripción del problema
- Screenshots
- Logs de la consola del navegador
- URL de tu GitHub Pages

---

**¡Felicidades! Ahora tienes una PWA profesional desplegada en GitHub Pages** 🚀
