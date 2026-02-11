# Preguntas Frecuentes (FAQ)

## General

### ¿Qué hace esta aplicación?
Permite registrar y controlar la carga de trozas de teca en camiones, clasificándolas automáticamente por circunferencia y calculando volúmenes.

### ¿Es gratuita?
Sí, es completamente gratuita y de código abierto bajo licencia MIT.

### ¿Necesito crear una cuenta?
No, la aplicación funciona sin necesidad de registro o autenticación.

## Uso

### ¿Dónde se miden las circunferencias?
A 1.3 metros de la base del árbol cortado.

### ¿Qué unidades se utilizan?
- Circunferencia: centímetros (cm)
- Volumen: metros cúbicos (m³)

### ¿Puedo eliminar una medición incorrecta?
Sí, cada medición tiene un botón de eliminar (ícono de papelera).

### ¿Cómo se clasifican las varillas?
Automáticamente según su circunferencia en 9 clases:
- 60-69 cm
- 70-79 cm
- ... hasta 140-150 cm

### ¿Qué pasa si ingreso una circunferencia fuera del rango?
El sistema solo acepta valores entre 60 y 150 cm. Fuera de ese rango mostrará un error.

## Datos y Almacenamiento

### ¿Dónde se guardan mis datos?
En el navegador usando Storage API. Los datos persisten aunque cierres la pestaña.

### ¿Se sincronizan entre dispositivos?
No actualmente. Los datos están solo en el dispositivo/navegador donde los creaste.

### ¿Puedo perder mis datos?
Sí, si borras el caché del navegador o los datos del sitio. Exporta regularmente a Excel como respaldo.

### ¿Cuántos viajes puedo guardar?
Depende del espacio de almacenamiento del navegador, pero típicamente cientos o miles.

## Exportación

### ¿En qué formato se exporta?
CSV (valores separados por comas), totalmente compatible con Microsoft Excel y Google Sheets.

### ¿Qué incluye el archivo exportado?
- Información del viaje
- Resumen por clase de circunferencia
- Detalle completo de cada medición con fecha/hora

### ¿Puedo exportar varios viajes a la vez?
Actualmente no. Debes exportar cada viaje individualmente.

## Configuración

### ¿Puedo cambiar los volúmenes por clase?
Sí, editando el código en `src/components/ControlCargaTeca.jsx`.

### ¿Puedo agregar más clases de circunferencia?
Sí, modificando el objeto `clasesVolumen` y la función `clasificarCircunferencia`.

### ¿Puedo cambiar el idioma?
Actualmente solo está en español. Puedes modificar los textos en el código.

## Técnicas

### ¿Qué navegadores son compatibles?
Todos los navegadores modernos: Chrome, Firefox, Safari, Edge.

### ¿Funciona sin internet?
Sí, una vez cargada. Pero necesitas conexión para la primera carga.

### ¿Hay versión móvil?
Es responsive, funciona perfectamente en móviles desde el navegador.

### ¿Puedo instalarla como app?
No actualmente, pero funciona muy bien desde el navegador móvil.

## Soporte

### ¿Dónde reporto un error?
En la sección de [Issues](https://github.com/tu-usuario/control-carga-teca/issues) de GitHub.

### ¿Dónde sugiero mejoras?
También en la sección de Issues con la etiqueta "enhancement".

### ¿Puedo contribuir al código?
¡Por supuesto! Lee la [Guía de Contribución](CONTRIBUTING.md).

## Privacidad y Seguridad

### ¿Se comparten mis datos?
No. Todos los datos permanecen en tu dispositivo.

### ¿Hay analytics o tracking?
No. No se recolecta ninguna información.

### ¿Es seguro usar esta aplicación?
Sí, no hay transmisión de datos ni conexiones externas.

---

¿No encontraste tu pregunta? Abre un [issue](https://github.com/tu-usuario/control-carga-teca/issues) con la etiqueta "question".
