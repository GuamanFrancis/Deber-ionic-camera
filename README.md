## 📌 Literal 2: Mostrar fotos guardadas en el Tab 3

### ✅ Objetivo
Visualizar las fotos previamente guardadas desde el `PhotoService` en la pestaña 3.

### 📄 Cambios realizados
- En `tab3.page.html` se añadió un `*ngFor` que recorre `photoService.photos` y muestra cada imagen junto con su nombre (`photo.filepath`).
- En `tab3.page.ts` se implementó `ngOnInit()` para cargar las fotos guardadas con `photoService.loadSaved()`.

### 🧠 Resultado
Al abrir el Tab 3, se muestran todas las fotos guardadas anteriormente.
