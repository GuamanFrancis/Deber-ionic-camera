## 📌 Literal 3: Botón para mostrar fotos guardadas

Se implementó un botón flotante que, al ser presionado, ejecuta la función `mostrarFotos()`. Esta función se encarga de cargar las fotos guardadas previamente utilizando el servicio `photoService` y luego asigna esas fotos a la variable `photos`, que se muestra en la interfaz de usuario.

### Función `mostrarFotos()`
La función `mostrarFotos()` realiza los siguientes pasos:

1. **Carga las fotos guardadas:** Utiliza el servicio `photoService` para cargar las fotos previamente guardadas en el dispositivo mediante `loadSaved()`.
2. **Asigna las fotos a la variable `photos`:** Después de cargar las fotos, las asigna a la variable `photos`, que se usa en el HTML para mostrar las imágenes en la pantalla.

async mostrarFotos() {
  await this.photoService.loadSaved();  // Carga las fotos guardadas
  this.photos = this.photoService.photos;  // Asigna las fotos cargadas a la variable 'photos'
}
