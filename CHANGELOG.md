# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2026-02-09

### Agregado
- **PWA Completa**: Aplicación Web Progresiva instalable
- Service Worker para funcionalidad offline
- Manifest.json con configuración PWA
- 8 iconos en diferentes tamaños (72px a 512px)
- Página offline personalizada
- Actualización automática con notificaciones
- GitHub Actions para deploy automático a GitHub Pages
- Sistema de registro de viajes de carga de trozas de teca
- Clasificación automática por circunferencia (9 clases: 60-69cm hasta 140-150cm)
- Cálculo automático de volúmenes por clase
- Base de datos persistente con Storage API
- Historial de viajes guardados
- Exportación de reportes a formato CSV/Excel
- Registro de fecha y hora de cada medición
- Interfaz responsive para móviles y escritorio
- Resumen por clase con cantidad de varillas y volumen total
- Función de eliminar mediciones individuales
- Consecutivo automático de mediciones
- Validación de rangos de circunferencia (60-150cm)
- Botón "Nuevo Viaje" para limpiar datos
- Botón "Guardar Viaje" para almacenar en base de datos
- Indicadores visuales de clases con varillas
- Total general de varillas y volumen por viaje

### Características PWA
- Instalable en Android, iOS y Desktop
- Funciona offline después de primera carga
- Cache inteligente con estrategia Network First
- Notificaciones de actualización
- Splash screen personalizado
- Modo standalone (sin barra del navegador)
- HTTPS automático en GitHub Pages

### Características Técnicas
- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.3.6
- Lucide React para iconos
- Persistencia con Storage API
- Service Worker con cache strategies
- GitHub Actions CI/CD
- Formato de exportación compatible con Excel

### Documentación
- README completo con instrucciones PWA
- Guía de contribución
- Documentación de volúmenes por clase
- Guía completa de despliegue PWA en GitHub Pages
- Checklist de PWA
- FAQ actualizado con información de PWA
- Licencia MIT

## [Unreleased]

### Por Implementar
- Sistema de autenticación de usuarios
- Backend para sincronización en nube
- Gráficos y estadísticas de viajes
- Impresión directa de reportes
- Soporte para múltiples especies (no solo teca)
- Exportación a PDF
- Importación masiva de datos
- Integración con GPS para ubicación de tala
- Cálculo de precio total por viaje
- Notificaciones y alertas
- Modo offline mejorado
- App móvil nativa (iOS/Android)
