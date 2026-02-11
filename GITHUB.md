# Guía Rápida: Subir a GitHub

## Primer Setup (solo una vez)

### 1. Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `control-carga-teca`
3. Descripción: "Sistema de control de carga de trozas de teca"
4. Público o Privado (tú decides)
5. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
6. Click en "Create repository"

### 2. Preparar el proyecto localmente

```bash
# Descomprimir el proyecto
tar -xzf control-carga-teca.tar.gz
cd control-carga-teca

# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: Sistema de control de carga de trozas de teca"

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/control-carga-teca.git

# Cambiar a rama main (si es necesario)
git branch -M main

# Subir código
git push -u origin main
```

## Actualizaciones Futuras

Cuando hagas cambios:

```bash
# Ver archivos modificados
git status

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: descripción del cambio"

# Subir a GitHub
git push
```

## Tipos de Mensajes de Commit

- `feat:` nueva característica
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` formateo, punto y coma faltantes, etc
- `refactor:` refactorización de código
- `test:` agregar tests
- `chore:` tareas de mantenimiento

## Comandos Útiles

```bash
# Ver historial de commits
git log

# Ver cambios no comiteados
git diff

# Descartar cambios locales
git checkout -- archivo.js

# Crear una nueva rama
git checkout -b feature/nueva-caracteristica

# Cambiar de rama
git checkout main

# Fusionar rama
git merge feature/nueva-caracteristica

# Ver ramas
git branch
```

## Configuración Inicial (solo primera vez)

```bash
# Configurar nombre
git config --global user.name "Tu Nombre"

# Configurar email
git config --global user.email "tu@email.com"
```

## Autenticación

GitHub ya no acepta contraseñas para push. Usa una de estas opciones:

### Opción 1: Token Personal (Recomendado)
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Selecciona scopes: `repo`
4. Copia el token
5. Úsalo como contraseña cuando hagas `git push`

### Opción 2: SSH Keys
1. Genera SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "tu@email.com"
   ```
2. Agrega a GitHub: Settings → SSH and GPG keys
3. Cambia remote a SSH:
   ```bash
   git remote set-url origin git@github.com:TU-USUARIO/control-carga-teca.git
   ```

## Problemas Comunes

### "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/control-carga-teca.git
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Ver URL del repositorio remoto
```bash
git remote -v
```

## GitHub Desktop (Alternativa GUI)

Si prefieres interfaz gráfica:
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository
3. Selecciona la carpeta del proyecto
4. Publish repository a GitHub

---

¡Listo! Tu proyecto ya está en GitHub 🎉
