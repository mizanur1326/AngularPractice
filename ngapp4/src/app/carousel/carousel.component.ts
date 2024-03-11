import { Component } from '@angular/core';

let IMAGES:any = [];
IMAGES[0] = 'https://picsum.photos/id/944/900/500';
IMAGES[1] = 'https://picsum.photos/id/1011/900/500';
IMAGES[2] = 'https://picsum.photos/id/984/900/500';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = IMAGES;
}