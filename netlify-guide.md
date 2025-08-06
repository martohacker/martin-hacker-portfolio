# 🌐 Guía para Subir tu Portfolio a Netlify

## 📋 Pasos para Netlify

### 1. **Preparar Archivos**
- Asegúrate de que todos los archivos estén en una carpeta
- El archivo principal debe llamarse `index.html`

### 2. **Subir a Netlify**
1. Ve a [netlify.com](https://netlify.com)
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio de GitHub
5. Configuración:
   - Build command: (dejar vacío)
   - Publish directory: (dejar vacío)
6. Deploy site

### 3. **Tu URL será:**
```
https://tu-sitio-123456.netlify.app
```

## ⚙️ Configuración Adicional

### **Personalizar Dominio**
1. En tu sitio en Netlify
2. Domain settings → Custom domains
3. Agrega tu dominio personalizado

### **Configurar Formulario**
Netlify detecta automáticamente los formularios. Solo agrega:
```html
<form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- resto del formulario -->
</form>
```

---

## 🎯 Ventajas de Netlify:
- ✅ **Gratuito**
- ✅ **Drag & Drop**
- ✅ **HTTPS automático**
- ✅ **Formularios incluidos**
- ✅ **CDN global**

---

*Guía para portfolio de Martin Hacker* 