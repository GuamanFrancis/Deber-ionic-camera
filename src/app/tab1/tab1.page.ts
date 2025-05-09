import { Component,OnInit} from '@angular/core';
import { PhotoService,UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  photos: UserPhoto[] = [];
  
  constructor(public photoService:PhotoService) {}

  

  async mostrarFotos() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;
  }


  
}