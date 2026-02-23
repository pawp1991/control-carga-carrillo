# 🎯 CAMBIO IMPORTANTE: Volúmenes por Circunferencia Exacta

## 📊 Qué Cambió

### ANTES (v1.1.1):
- Usaba **9 clases de circunferencia** con volumen promedio por clase
- Ejemplo: Cualquier árbol entre 80-89 cm usaba el mismo volumen (0.323408 m³)
- **Menos preciso** porque todos los árboles de una clase tenían el mismo volumen

### AHORA (v1.2.0):
- Usa **volumen específico para cada circunferencia** de 40 a 150 cm
- Ejemplo: Un árbol de 85 cm tiene volumen de 0.372700 m³, uno de 86 cm tiene 0.383569 m³
- **MÁS PRECISO** porque cada medición usa su volumen exacto
- Soporta decimales con interpolación (ej: 85.5 cm)

---

## 🔢 Datos de Volumen

### Fuente
Archivo: `VolxCirc.xlsx` (111 circunferencias de 40 a 150 cm)

### Rango
- **Mínimo**: 40 cm → 0.069292 m³
- **Máximo**: 150 cm → 1.077706 m³
- **Total**: 111 valores específicos

### Ejemplos de Volúmenes Exactos:
```
Circunferencia | Volumen (m³)
---------------|-------------
40 cm          | 0.069292
50 cm          | 0.118351
60 cm          | 0.178712
70 cm          | 0.234341
80 cm          | 0.296854
85 cm          | 0.372700  ← Específico
90 cm          | 0.381815
100 cm         | 0.480693
110 cm         | 0.592922
120 cm         | 0.718114
130 cm         | 0.855914
140 cm         | 1.005993
150 cm         | 1.077706
```

---

## ⚙️ Cómo Funciona

### 1. Volumen por Circunferencia Entera
Si ingresas **85 cm**, busca directamente en la tabla:
```javascript
volumen = volumenes["85"] = 0.372700 m³
```

### 2. Volumen con Decimales (Interpolación)
Si ingresas **85.5 cm**, interpola entre 85 y 86:
```javascript
volumen85 = 0.372700 m³
volumen86 = 0.383569 m³
factor = 0.5

volumen = 0.372700 + (0.383569 - 0.372700) × 0.5
volumen = 0.378135 m³  ← Valor interpolado
```

### 3. Clasificación (Solo Visual)
La circunferencia todavía se clasifica para el resumen visual:
- 85 cm → Clase "80-89"
- Pero usa volumen exacto de 0.372700 m³, NO el promedio de la clase

---

## 📈 Ventajas del Cambio

### ✅ Mayor Precisión
- **Antes**: Árbol de 80 cm y 89 cm tenían el mismo volumen (0.323408 m³)
- **Ahora**: 80 cm = 0.296854 m³, 89 cm = 0.365332 m³ (diferencia de 23%)

### ✅ Volumen Total Más Exacto
Con 100 árboles de diferentes circunferencias:
- **Método anterior**: Error acumulado por usar promedios
- **Método nuevo**: Volumen real sumando valores exactos

### ✅ Soporta Decimales
- Puedes medir 85.3 cm y obtener un volumen interpolado preciso
- Antes se redondeaba a la clase más cercana

### ✅ Rango Ampliado
- **Antes**: 60-150 cm (9 clases)
- **Ahora**: 40-150 cm (11 clases, 111 valores exactos)

---

## 📋 Ejemplo Práctico

### Viaje con 5 Árboles

| # | Circunferencia | Clase  | Volumen ANTES | Volumen AHORA | Diferencia |
|---|----------------|--------|---------------|---------------|------------|
| 1 | 82 cm          | 80-89  | 0.323408      | 0.314027      | -2.9%      |
| 2 | 85 cm          | 80-89  | 0.323408      | 0.372700      | +15.2%     |
| 3 | 88 cm          | 80-89  | 0.323408      | 0.357063      | +10.4%     |
| 4 | 75.5 cm        | 70-79  | 0.247307      | 0.262253*     | +6.0%      |
| 5 | 92 cm          | 90-99  | 0.418145      | 0.389874      | -6.8%      |

**Total ANTES**: 1.635676 m³  
**Total AHORA**: 1.695917 m³  
**Diferencia**: +3.7% más preciso

*Interpolado entre 75 y 76 cm

---

## 🔧 Cambios Técnicos

### Archivos Nuevos
1. `src/volumenes-por-circunferencia.json` - 111 volúmenes exactos
2. `docs/VolxCirc.xlsx` - Archivo Excel original con los datos

### Código Modificado
1. **Importación de datos**:
   ```javascript
   import volumenesPorCircunferencia from '../volumenes-por-circunferencia.json';
   ```

2. **Nueva función de obtención de volumen**:
   ```javascript
   const obtenerVolumen = (circunferencia) => {
     // Busca volumen exacto
     // Interpola si tiene decimales
     // Retorna 0 si está fuera de rango
   }
   ```

3. **Clases solo para visualización**:
   ```javascript
   const clasesVisualizacion = {
     '40-49': { min: 40, max: 49 },
     '50-59': { min: 50, max: 59 },
     // ... hasta 140-150
   }
   ```

### Validaciones Actualizadas
- Rango mínimo: 40 cm (antes 60 cm)
- Rango máximo: 150 cm (igual)
- Mensaje de error actualizado

---

## 📊 Cuadro Resumen

El cuadro resumen ahora muestra **11 clases** en lugar de 9:

```
Clase      | Cantidad
-----------|----------
40-49      | 2
50-59      | 5
60-69      | 8
70-79      | 12
80-89      | 15  ← Más común
90-99      | 10
100-109    | 6
110-119    | 3
120-129    | 2
130-139    | 1
140-150    | 1
```

Pero cada árbol tiene su **volumen exacto** sumado al total.

---

## 📤 Exportación Excel

El archivo CSV exportado ahora incluye:
- Circunferencia exacta (con decimales si se ingresó)
- Clase (para referencia visual)
- **Volumen exacto** de esa circunferencia específica

---

## 🔄 Compatibilidad

### Viajes Anteriores
Los viajes guardados con la versión anterior tendrán volúmenes calculados con el método antiguo (por clase). Los nuevos viajes usarán el método exacto.

### Migración
No hay migración automática. Los datos históricos mantienen sus volúmenes originales.

---

## ✅ Verificación

Para verificar que está funcionando:

1. **Ingresa 85 cm**
   - Debe mostrar volumen ≈ 0.372700 m³
   - Clase: 80-89

2. **Ingresa 85.5 cm**
   - Debe mostrar volumen ≈ 0.378135 m³ (interpolado)
   - Clase: 80-89

3. **Compara con versión anterior**
   - Mismo viaje tendrá volumen total diferente (más preciso)

---

## 🎯 Conclusión

Este cambio hace que el sistema calcule volúmenes **mucho más precisos** al usar valores específicos por circunferencia en lugar de promedios por clase. El volumen total del viaje será más exacto y confiable.

---

**Versión**: 1.2.0  
**Fecha**: 11 de Febrero, 2026  
**Tipo**: Mejora de precisión (breaking change menor)
