import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  OwlOptions: any;
  constructor() {

  }

  ngOnInit(): void {
  }
  customOptions: any = {
    items: 3,
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
      1: {
        items: 2
      },
      3: {
        items: 3
      },
      4: {
        items: 4
      }

    },
  }

  customOptions1: any = {
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
    },
  }

  days: any = 228;
  hours: number = 10;
  min: number = 35;
  sec: number = 56;

  x = setInterval(() => {
    var futureDate = new Date("June 10, 2022 11:59:00").getTime();
    // console.log(futureDate);
    var today = new Date().getTime();
    // console.log(today);
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.sec = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(this.days);

    if (distance < 0) {
      clearInterval(this.x)
      this.days = 0;
      this.hours = 0;
      this.min = 0;
      this.sec = 0;

    }


  }, 1000);


}

