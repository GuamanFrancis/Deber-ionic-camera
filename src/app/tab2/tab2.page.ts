import { Component} from '@angular/core';
import { PhotoService,UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public photoService:PhotoService) {}
  photos: UserPhoto[] = [];

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
  // funcion para mostrar las fotos a media calidad
  async addPhotoLowQuality() {
    await this.photoService.addNewToGallery(50); 
  }

  
  
}
