import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {
  blog_details: {
    image: string, date: string, year: number, category: string, name: string, desc: string
  }[] = [];
  pageSize: any = 6;
  page = 2;

  constructor() { }

  ngOnInit(): void {
    this.blog_details = [
      {
        "image": "assets/img/blog/blog1.jpg",
        "date": "10 Aug",
        "year": 2021,
        "category": "Training",
        "name": "Properly a pet training guide",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur."
      },
      {
        "image": "assets/img/blog/blog2.jpg",
        "date": "11 Aug",
        "year": 2021,
        "category": "Behaviour",
        "name": "The exact rules of how to travel with pets",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur."
      },
      {
        "image": "assets/img/blog/blog3.jpg",
        "date": "10 Aug",
        "year": 2021,
        "category": "Cicadas",
        "name": "Are cicadas dangerous for pets to eat?",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacin eget consectetur."
      },
      {
        "image": "assets/img/blog/blog4.jpg",
        "date": "9 Aug",
        "year": 2021,
        "category": "",
        "name": "",
        "desc": ""
      },
      {
        "image": "assets/img/blog/blog5.jpg",
        "date": "8 Aug",
        "year": 2021,
        "category": "Pet",
        "name": "Pet trends to watch in 2021",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur"
      },
      {
        "image": "assets/img/blog/blog2.jpg",
        "date": "11 Aug",
        "year": 2021,
        "category": "Behaviour",
        "name": "The exact rules of how to travel with pets",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur."
      },
      {
        "image": "assets/img/blog/blog3.jpg",
        "date": "10 Aug",
        "year": 2021,
        "category": "Cicadas",
        "name": "Are cicadas dangerous for pets to eat?",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacin eget consectetur."
      },
      {
        "image": "assets/img/blog/blog1.jpg",
        "date": "10 Aug",
        "year": 2021,
        "category": "Training",
        "name": "Properly a pet training guide",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur."
      },
      {
        "image": "assets/img/blog/blog2.jpg",
        "date": "11 Aug",
        "year": 2021,
        "category": "Behaviour",
        "name": "The exact rules of how to travel with pets",
        "desc": "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur."
      },
    ]

  }

}
