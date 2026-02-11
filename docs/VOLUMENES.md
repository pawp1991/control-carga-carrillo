# Configuración de Volúmenes por Clase

Este documento explica la configuración de volúmenes utilizada en el sistema.

## Tabla de Volúmenes por Clase de Circunferencia

Los volúmenes están expresados en metros cúbicos (m³) y corresponden a mediciones de circunferencia tomadas a 1.3 metros de la base del árbol cortado.

| Clase (cm) | Volumen (m³) | Descripción |
|------------|--------------|-------------|
| 60-69      | 0.183372     | Clase 1     |
| 70-79      | 0.247307     | Clase 2     |
| 80-89      | 0.323408     | Clase 3     |
| 90-99      | 0.418145     | Clase 4     |
| 100-109    | 0.495436     | Clase 5     |
| 110-119    | 0.585027     | Clase 6     |
| 120-129    | 0.679903     | Clase 7     |
| 130-139    | 0.802256     | Clase 8     |
| 140-150    | 0.901886     | Clase 9     |

## Cómo Modificar los Volúmenes

Si necesitas actualizar los volúmenes por clase, edita el objeto `clasesVolumen` en el archivo:

```
src/components/ControlCargaTeca.jsx
```

```javascript
const clasesVolumen = {
  '60-69': 0.183372,
  '70-79': 0.247307,
  '80-89': 0.323408,
  '90-99': 0.418145,
  '100-109': 0.495436,
  '110-119': 0.585027,
  '120-129': 0.679903,
  '130-139': 0.802256,
  '140-150': 0.901886
};
```

## Agregar Nuevas Clases

Para agregar una nueva clase de circunferencia:

1. Agrega la clase al objeto `clasesVolumen`
2. Actualiza la función `clasificarCircunferencia` para incluir el nuevo rango
3. El resumen se actualizará automáticamente

## Fuente de Datos

Los volúmenes provienen de tablas de cubicación forestales específicas para plantaciones de teca, basadas en estudios dendrométricos.
