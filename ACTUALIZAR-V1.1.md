# 🔄 GUÍA: Actualizar a Versión 1.1 en GitHub Desktop

## 🎯 Cambios en Esta Versión

✅ Número de viaje automático (año + lote + consecutivo)  
✅ Promedio de circunferencia agregado  
✅ Cuadro resumen simplificado  
✅ **Sistema de guardado CORREGIDO** (ahora funciona)

---

## 📦 Opción 1: Actualizar Proyecto Existente (RECOMENDADO)

### Si ya tienes el repositorio en GitHub:

1. **Descomprime** el archivo `control-carga-carrillo-v1.1.tar.gz`

2. **Reemplaza los archivos** en tu carpeta local:
   - Ve a la carpeta donde tienes el proyecto
   - **Copia TODOS los archivos** de la carpeta descomprimida
   - Pega en tu carpeta del proyecto (reemplaza todo)

3. **Abre GitHub Desktop**
   - GitHub Desktop detectará automáticamente los cambios
   - Verás una lista de archivos modificados

4. **Haz Commit**:
   - Abajo en "Summary" escribe:
     ```
     feat: v1.1 - año/lote automático, promedio circunferencia, corregir guardado
     ```
   - Click en **"Commit to main"**

5. **Push**:
   - Click en **"Push origin"** (arriba)
   - Espera que suba (toma 5-10 segundos)

6. **Deploy Automático**:
   - Ve a tu repositorio en GitHub
   - Pestaña **Actions**
   - Verás el deploy corriendo
   - Espera 2-3 minutos hasta ✅ verde

7. **¡Listo!**:
   - Tu app se actualizó en: `https://pawp1991.github.io/control-carga-carrillo/`
   - Recarga la página (Ctrl + Shift + R para forzar)

---

## 📦 Opción 2: Repositorio Nuevo (Si Empiezas de Cero)

### Si nunca has subido el proyecto o quieres empezar limpio:

1. **Descomprime** `control-carga-carrillo-v1.1.tar.gz`

2. **En GitHub Desktop**:
   - File → Add Local Repository
   - Selecciona la carpeta descomprimida
   - Si dice "not a repository", click "Create Repository"

3. **Publica**:
   - Click "Publish Repository"
   - Name: `control-carga-carrillo`
   - Desmarca "Keep this code private"
   - Click "Publish"

4. **Configura GitHub Pages**:
   - Ve a GitHub.com → tu repositorio
   - Settings → Pages
   - Source: **GitHub Actions**

5. **Espera Deploy**:
   - Actions → Espera ✅ verde

6. **¡Listo!**:
   - `https://pawp1991.github.io/control-carga-carrillo/`

---

## ⚠️ Importante: Datos Anteriores

**Los viajes guardados con la versión 1.0 NO son compatibles** porque:
- La versión anterior usaba un sistema que no funcionaba
- El formato de datos cambió

**Recomendación**: 
- Empieza con viajes nuevos
- La nueva versión SÍ guarda correctamente

---

## 🧪 Probar los Cambios Localmente (Opcional)

Si quieres probar antes de subir a GitHub:

```bash
cd control-carga-carrillo
npm install
npm run dev
```

Abre: http://localhost:5173

Prueba:
- ✅ Ingresar año y lote
- ✅ Ver número de viaje generado automáticamente
- ✅ Agregar mediciones
- ✅ Guardar viaje (debe decir "Viaje guardado exitosamente")
- ✅ Ver historial (debe aparecer el viaje)
- ✅ Ver promedio de circunferencia en el resumen

---

## 📋 Checklist de Actualización

Antes de subir, verifica que tienes:

- [ ] Carpeta descomprimida `control-carga-carrillo`
- [ ] GitHub Desktop instalado y con sesión iniciada
- [ ] Archivos copiados/reemplazados en tu proyecto
- [ ] Commit hecho en GitHub Desktop
- [ ] Push realizado
- [ ] Deploy corriendo en Actions (GitHub.com)

---

## 🔍 Verificar que Funcionó

1. **En GitHub.com**:
   - Ve a tu repositorio
   - Verifica que aparezcan los archivos actualizados
   - La fecha debe ser reciente

2. **En Actions**:
   - Debe haber un workflow con ✅ verde
   - Si hay ❌ roja, revisa los errores

3. **En tu App**:
   - Abre: `https://pawp1991.github.io/control-carga-carrillo/`
   - Recarga con Ctrl + Shift + R
   - Debes ver 3 campos: Año, Lote, Número de Viaje
   - El cuadro resumen debe tener el promedio de circunferencia

---

## 🆘 Solución de Problemas

### No aparecen cambios en GitHub Desktop
- Asegúrate de copiar TODOS los archivos
- Verifica que estás en la carpeta correcta

### El deploy falla (❌ en Actions)
- Ve a Actions → Click en el workflow rojo
- Lee el error
- Probablemente sea permisos: Settings → Actions → Read and write permissions

### La app no se actualiza en el navegador
- Limpia el caché: Ctrl + Shift + R
- Espera 5 minutos (puede tardar en propagarse)
- Verifica en Actions que terminó con ✅

### Sigo viendo la versión antigua
- Abre en ventana privada / incógnito
- Si ahí ves la nueva versión, es problema de caché
- Borra datos del sitio en tu navegador

---

## 📞 Ayuda

Si algo no funciona:
1. Verifica que el deploy terminó (✅ en Actions)
2. Revisa la consola del navegador (F12)
3. Toma captura de pantalla del error
4. Dime qué ves y te ayudo

---

## ✅ Una Vez Actualizado

Tu app tendrá:
- ✅ Números de viaje automáticos (2024-A-001, 2024-A-002...)
- ✅ Sistema de guardado funcional
- ✅ Historial de viajes funcional
- ✅ Promedio de circunferencia visible
- ✅ Resumen más limpio y legible
- ✅ Exportación Excel mejorada

---

**¡Disfruta la nueva versión! 🎉**
