import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.css']
})
export class ClientReviewComponent implements OnInit {

  constructor() { }
  OwlOptions: any;
  ngOnInit(): void {
  }
  customOptions: any = {
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
    },

  }
}
