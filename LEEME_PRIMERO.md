# 📦 PROYECTO COMPLETO: Control de Carga de Trozas de Teca

## 🎯 Descripción
Sistema web completo para el control de carga de trozas de teca en camiones, con clasificación automática por circunferencia, cálculo de volúmenes, base de datos persistente y exportación a Excel.

## 📁 Estructura del Proyecto

```
control-carga-teca/
├── 📄 README.md                    # Documentación principal
├── 📄 CHANGELOG.md                 # Historial de versiones
├── 📄 CONTRIBUTING.md              # Guía de contribución
├── 📄 GITHUB.md                    # Guía para subir a GitHub
├── 📄 LICENSE                      # Licencia MIT
├── 📄 package.json                 # Dependencias del proyecto
├── 📄 vite.config.js               # Configuración de Vite
├── 📄 tailwind.config.js           # Configuración de Tailwind
├── 📄 postcss.config.js            # Configuración de PostCSS
├── 📄 .eslintrc.cjs                # Configuración de ESLint
├── 📄 .gitignore                   # Archivos ignorados por Git
├── 📄 .env.example                 # Ejemplo de variables de entorno
├── 📄 index.html                   # HTML principal
│
├── 📂 src/                         # Código fuente
│   ├── 📄 main.jsx                 # Punto de entrada
│   ├── 📄 App.jsx                  # Componente principal
│   ├── 📄 index.css                # Estilos globales
│   └── 📂 components/
│       └── 📄 ControlCargaTeca.jsx # Componente de la aplicación
│
├── 📂 docs/                        # Documentación adicional
│   ├── 📄 DESPLIEGUE.md            # Guía de despliegue
│   ├── 📄 FAQ.md                   # Preguntas frecuentes
│   ├── 📄 SCREENSHOTS.md           # Descripción de capturas
│   ├── 📄 VOLUMENES.md             # Info de volúmenes por clase
│   ├── 📄 volumenes.json           # Datos de volúmenes en JSON
│   └── 📄 volxclase.xlsx           # Archivo original de volúmenes
│
└── 📂 public/                      # Archivos estáticos
```

## 🚀 Inicio Rápido

### Opción 1: Descomprimir y Ejecutar

```bash
# 1. Descomprimir el archivo
tar -xzf control-carga-teca.tar.gz

# 2. Entrar al directorio
cd control-carga-teca

# 3. Instalar dependencias
npm install

# 4. Ejecutar en desarrollo
npm run dev

# 5. Abrir en navegador
# http://localhost:5173
```

### Opción 2: Compilar para Producción

```bash
# Compilar
npm run build

# Los archivos estarán en dist/
# Puedes servir esa carpeta con cualquier servidor web
```

## 📤 Subir a GitHub

Lee el archivo `GITHUB.md` para instrucciones detalladas, pero básicamente:

```bash
# 1. Crear repo en GitHub
# 2. En tu terminal:
cd control-carga-teca
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/control-carga-teca.git
git push -u origin main
```

## ✨ Características Principales

### ✅ Funcionalidades Implementadas
- [x] Registro de número de viaje
- [x] Ingreso de mediciones de circunferencia
- [x] Clasificación automática en 9 clases (60-150cm)
- [x] Cálculo automático de volúmenes
- [x] Registro de fecha/hora de cada medición
- [x] Base de datos persistente (Storage API)
- [x] Historial de todos los viajes
- [x] Exportación a Excel/CSV
- [x] Eliminar mediciones individuales
- [x] Resumen por clase con totales
- [x] Diseño responsive (móvil + desktop)
- [x] Interfaz intuitiva y profesional

### 🔧 Stack Tecnológico
- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Estilos**: Tailwind CSS 3.3.6
- **Iconos**: Lucide React
- **Persistencia**: Storage API del navegador
- **Formato Exportación**: CSV (compatible con Excel)

## 📊 Datos de Volumen

El sistema usa las siguientes clases de circunferencia y volúmenes:

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

## 📖 Documentación Disponible

1. **README.md** - Documentación principal con instalación y uso
2. **GITHUB.md** - Guía paso a paso para subir a GitHub
3. **CONTRIBUTING.md** - Cómo contribuir al proyecto
4. **CHANGELOG.md** - Historial de cambios y versiones
5. **docs/DESPLIEGUE.md** - Guías de despliegue (Vercel, Netlify, etc.)
6. **docs/FAQ.md** - Preguntas frecuentes
7. **docs/VOLUMENES.md** - Explicación de volúmenes por clase

## 🎨 Características de Diseño

- **Paleta de colores**: Verde esmeralda (tema forestal)
- **Responsive**: Se adapta a móviles, tablets y desktop
- **Accesible**: Botones y textos claramente visibles
- **Intuitivo**: Flujo lógico y natural de trabajo
- **Profesional**: Diseño limpio y corporativo

## 🔐 Privacidad y Datos

- **Sin registro**: No requiere cuenta de usuario
- **Datos locales**: Todo se guarda en el navegador
- **Sin tracking**: No hay analytics ni recolección de datos
- **Offline-ready**: Funciona sin conexión (después de cargar)

## 🛠️ Personalización

### Cambiar Volúmenes
Edita `src/components/ControlCargaTeca.jsx`, línea ~12:
```javascript
const clasesVolumen = {
  '60-69': 0.183372,
  // ... modificar valores
};
```

### Agregar Clases
1. Agrega la clase en `clasesVolumen`
2. Actualiza la función `clasificarCircunferencia`

### Cambiar Estilos
Modifica las clases de Tailwind en el componente o edita `src/index.css`

## 📱 Despliegue

El proyecto incluye instrucciones para desplegar en:
- ✅ Vercel (recomendado - más fácil)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Servidor propio con Nginx
- ✅ Docker

Ver `docs/DESPLIEGUE.md` para detalles.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee `CONTRIBUTING.md` para más info.

## 📄 Licencia

MIT License - Libre de usar, modificar y distribuir.

## 📞 Soporte

- **Bugs**: Abre un issue en GitHub
- **Preguntas**: Revisa FAQ.md o abre un issue
- **Mejoras**: Abre un issue con la etiqueta "enhancement"

## ✅ Checklist Pre-Deploy

Antes de desplegar:
- [ ] Instalar dependencias: `npm install`
- [ ] Probar localmente: `npm run dev`
- [ ] Compilar: `npm run build`
- [ ] Probar build: `npm run preview`
- [ ] Revisar que todo funcione
- [ ] Hacer commit de cambios
- [ ] Push a GitHub
- [ ] Desplegar en plataforma elegida

## 🎉 ¡Listo para Usar!

El proyecto está **100% completo y funcional**. Puedes:
1. Instalarlo y usarlo inmediatamente
2. Subirlo a GitHub
3. Desplegarlo en producción
4. Personalizarlo según tus necesidades
5. Contribuir con mejoras

---

**Desarrollado con ❤️ para el control de plantaciones forestales de teca**

¿Preguntas? Revisa la documentación o abre un issue en GitHub.
