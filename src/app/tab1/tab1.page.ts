import { Component,OnInit} from '@angular/core';
import { PhotoService,UserPhoto } from '../services/photo.service';
//ejercicio 3 para mostar las fotos
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  photos: UserPhoto[] = [];
  
  constructor(public photoService:PhotoService) {}

  
// funcion mostrar fotos
  // funcion para mostrar las fotos
  async mostrarFotos() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;
  }


  
}