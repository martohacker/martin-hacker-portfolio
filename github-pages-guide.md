# 🚀 Guía para Subir tu Portfolio a GitHub Pages

## 📋 Pasos para GitHub Pages

### 1. **Crear Repositorio en GitHub**
1. Ve a [github.com](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `martin-hacker-portfolio`
4. Marca "Public"
5. Haz clic en "Create repository"

### 2. **Subir Archivos**
```bash
# En tu carpeta del portfolio
git init
git add .
git commit -m "Primer commit - Portfolio Martin Hacker"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/martin-hacker-portfolio.git
git push -u origin main
```

### 3. **Activar GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main`
5. Folder: `/ (root)`
6. Save

### 4. **Tu URL será:**
```
https://TU_USUARIO.github.io/martin-hacker-portfolio
```

## ⚙️ Configuración Adicional

### **Personalizar Dominio (Opcional)**
1. En Settings → Pages
2. Custom domain: `tu-dominio.com`
3. Save

### **Configurar Formspree**
1. Ve a [formspree.io](https://formspree.io)
2. Crea un formulario
3. Copia el endpoint
4. Actualiza en `index.html`:
   ```html
   action="https://formspree.io/f/TU_ENDPOINT"
   ```

---

## 🎯 Ventajas de GitHub Pages:
- ✅ **Gratuito**
- ✅ **Fácil de configurar**
- ✅ **Integrado con Git**
- ✅ **HTTPS automático**
- ✅ **Personalizable**

---

*Guía para portfolio de Martin Hacker* 