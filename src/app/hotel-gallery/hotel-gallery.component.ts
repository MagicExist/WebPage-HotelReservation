import { Component } from '@angular/core';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';

@Component({
  selector: 'app-hotel-gallery',
  standalone: true,
  imports: [GalleryItemComponent],
  templateUrl: './hotel-gallery.component.html',
  styleUrl: './hotel-gallery.component.css'
})
export class HotelGalleryComponent {

}
