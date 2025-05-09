## 📌 Literal 4: Botón para tomar fotos a media calidad

Se implementó un botón flotante que, al ser presionado, ejecuta la función `addPhotoLowQuality()`. Esta función toma una foto con una calidad reducida al 50%, utilizando el servicio `photoService` para capturar y guardar la foto.

### Código
**HTML – Botón para tomar fotos a media calidad:**

<ion-fab-button (click)="addPhotoLowQuality()" color="medium">
  <ion-icon name="camera-outline"></ion-icon>
</ion-fab-button>

async addPhotoLowQuality() {
  await this.photoService.addNewToGallery(50);  // Llama al servicio para tomar la foto con calidad del 50%
}


Modificación en photoService
