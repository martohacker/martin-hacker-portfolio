# 📧 Configuración del Formulario de Contacto

## 🎯 Opción Recomendada: Formspree

### 1. **Crear Cuenta en Formspree**
1. Ve a [formspree.io](https://formspree.io)
2. Regístrate con tu email
3. Crea un nuevo formulario
4. Copia el endpoint que te dan (algo como `xqkzrqkz`)

### 2. **Actualizar el HTML**
Reemplaza `tu-endpoint-aqui` en el archivo `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/TU_ENDPOINT_REAL" method="POST">
```

### 3. **Configurar Redirección (Opcional)**
Agrega esto al formulario para redirigir después del envío:

```html
<form class="contact-form" action="https://formspree.io/f/TU_ENDPOINT" method="POST">
    <!-- campos del formulario -->
    <input type="hidden" name="_next" value="https://tu-dominio.com/gracias.html">
</form>
```

## 🔄 Otras Opciones

### **Netlify Forms** (Si usas Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- campos del formulario -->
</form>
```

### **EmailJS** (JavaScript)
1. Regístrate en [emailjs.com](https://emailjs.com)
2. Configura un template de email
3. Usa JavaScript para enviar:

```javascript
emailjs.send("service_id", "template_id", {
    from_name: document.querySelector('input[name="name"]').value,
    from_email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value,
});
```

## 📧 Configuración de Email

### **Formspree Settings:**
- **Email de Destino**: martinhacker02@gmail.com
- **Notificaciones**: Activadas
- **Spam Filter**: Activado
- **Auto-Reply**: Opcional (mensaje automático de confirmación)

## 🛡️ Seguridad

### **Protección Anti-Spam:**
- Formspree incluye protección automática
- Puedes agregar reCAPTCHA si quieres más seguridad

### **Validación:**
- Los campos `required` ya están configurados
- Formspree valida emails automáticamente

## 📱 Pruebas

### **Para Probar:**
1. Configura Formspree
2. Actualiza el endpoint en el HTML
3. Sube el portfolio a un servidor
4. Envía un mensaje de prueba
5. Verifica que llegue a tu email

## 🎨 Personalización

### **Mensaje de Confirmación:**
Puedes crear una página `gracias.html` con:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mensaje Enviado</title>
</head>
<body>
    <h1>¡Gracias por tu mensaje!</h1>
    <p>Te responderé pronto.</p>
    <a href="index.html">Volver al Portfolio</a>
</body>
</html>
```

---

## 🚀 Pasos Rápidos:

1. **Ve a formspree.io y regístrate**
2. **Crea un formulario nuevo**
3. **Copia el endpoint (ej: `xqkzrqkz`)**
4. **Reemplaza en `index.html`:**
   ```html
   action="https://formspree.io/f/xqkzrqkz"
   ```
5. **¡Listo! Los mensajes llegarán a tu email**

---

*Configuración para portfolio de Martin Hacker* 