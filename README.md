## 📌 Literal 1: Mostrar el nombre debajo de la imagen

### ✅ Objetivo
Mostrar el nombre del archivo de cada imagen justo debajo de ella en la interfaz.

### 📄 Cambios realizados
Se agregó lo siguiente dentro del bucle `*ngFor` en el archivo HTML:

```html
<ion-card-content>
  <p>{{ photo.filepath }}</p>
</ion-card-content>
