import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-category',
  templateUrl: './slider-category.component.html',
  styleUrls: ['./slider-category.component.css']
})
export class SliderCategoryComponent implements OnInit {
  OwlOptions: any;
  constructor() { }

  ngOnInit(): void { }
  customOptions: any = {
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },

  }

}
