# 🌳 Control de Carga de Trozas de Teca

Sistema web PWA (Progressive Web App) para el control y seguimiento de carga de trozas de teca en camiones, con clasificación por circunferencia, cálculo de volúmenes y generación de reportes.

## 📋 Características

- **PWA Completa**: Instalable en cualquier dispositivo como app nativa
- **Funciona Offline**: Usa la app sin conexión a internet
- **Registro de Viajes**: Control de número de viaje y mediciones
- **Medición de Circunferencia**: Registro a 1.3m de la base del árbol cortado
- **Clasificación Automática**: Por clases de circunferencia (60-69cm hasta 140-150cm)
- **Cálculo de Volúmenes**: Volumen automático por clase según tabla predefinida
- **Base de Datos Persistente**: Almacenamiento de todos los viajes
- **Historial Completo**: Consulta de viajes anteriores
- **Exportación a Excel**: Generación de reportes CSV compatibles con Excel
- **Registro de Fecha/Hora**: Timestamp de cada medición
- **Actualización Automática**: Notificaciones cuando hay nuevas versiones

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/control-carga-teca.git
cd control-carga-teca
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

## 📦 Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 📱 Desplegar como PWA en GitHub Pages

**Esta app está lista para desplegarse como PWA en GitHub Pages:**

```bash
# 1. Sube el código a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/control-carga-teca.git
git push -u origin main

# 2. Habilita GitHub Pages en Settings → Pages → Source: GitHub Actions

# 3. ¡Listo! Tu PWA estará en:
# https://TU-USUARIO.github.io/control-carga-teca/
```

**Guía completa:** Ver [docs/PWA-GITHUB-PAGES.md](docs/PWA-GITHUB-PAGES.md)

### Características PWA

- ✅ **Instalable**: Agrégala a la pantalla de inicio en móviles/desktop
- ✅ **Offline**: Funciona sin conexión a internet
- ✅ **Rápida**: Precarga recursos para carga instantánea
- ✅ **Actualizable**: Notifica automáticamente nuevas versiones
- ✅ **Segura**: HTTPS automático en GitHub Pages

## 🛠️ Tecnologías Utilizadas

- **React** - Framework de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Storage API** - Persistencia de datos
- **Service Worker** - Funcionalidad PWA y offline
- **GitHub Actions** - CI/CD automático

## 📊 Estructura de Clases y Volúmenes

| Clase (cm) | Volumen (m³) |
|------------|--------------|
| 60-69      | 0.183372     |
| 70-79      | 0.247307     |
| 80-89      | 0.323408     |
| 90-99      | 0.418145     |
| 100-109    | 0.495436     |
| 110-119    | 0.585027     |
| 120-129    | 0.679903     |
| 130-139    | 0.802256     |
| 140-150    | 0.901886     |

## 📖 Uso

### 1. Crear un Nuevo Viaje
- Ingresar el número de viaje (ej: V-001)
- Click en "Nuevo Viaje" para limpiar datos anteriores

### 2. Registrar Mediciones
- Medir la circunferencia a 1.3m de la base
- Ingresar el valor en centímetros
- Click en "Agregar" o presionar Enter
- El sistema asigna automáticamente:
  - Consecutivo
  - Clase de circunferencia
  - Volumen
  - Fecha y hora

### 3. Guardar el Viaje
- Click en "Guardar Viaje"
- Los datos se almacenan en la base de datos persistente

### 4. Exportar a Excel
- Click en "Exportar Excel"
- Se descarga un archivo CSV con:
  - Resumen del viaje
  - Totales por clase
  - Detalle de todas las mediciones

### 5. Consultar Historial
- Click en "Historial"
- Seleccionar cualquier viaje para cargarlo y revisarlo

## 🔧 Configuración

### Modificar Volúmenes por Clase

Editar el objeto `clasesVolumen` en `src/components/ControlCargaTeca.jsx`:

```javascript
const clasesVolumen = {
  '60-69': 0.183372,
  '70-79': 0.247307,
  // ... agregar o modificar clases
};
```

### Personalizar Rangos de Clasificación

Editar la función `clasificarCircunferencia` en el mismo archivo.

## 📱 Compatibilidad

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos móviles y tablets
- ✅ Exportación compatible con Microsoft Excel y Google Sheets

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👤 Autor

Desarrollado para el control de plantaciones forestales de teca.

## 📞 Soporte

Para reportar bugs o solicitar features, abrir un [issue](https://github.com/tu-usuario/control-carga-teca/issues).

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
