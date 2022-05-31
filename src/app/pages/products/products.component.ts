import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: {
    id: number, product: string, image: string, price: number, quantity: number
  }[] = [];

  p: number = 1;
  collection: any[] = [];
  isProductDetail: any = [];
  items: any = [];
  cartData: any;
  wish: any = [];
  page = 4;
  pageSize: any = 12;
  item: any = [];
  quantity: any = [];

  constructor(public cartservice: CartService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cartservice.loadCart();

    this.items = this.cartservice.getItems();
    this.item = this.cartservice.getWishlist();

    this.AddQty(this.isProductDetail);

    console.log(this.isProductDetail, "isProductDetail")
    this.products = [
      {
        "id": 1,
        "product": "Pet brash",
        "image": "assets/img/products/products1.jpg",
        "price": 35,
        "quantity": 1
      },
      {
        "id": 2,
        "product": "Automatic dog blue leash",
        "image": "assets/img/products/products2.jpg",
        "price": 75,
        "quantity": 1
      },
      {
        "id": 3,
        "product": "Automatic dog blue leash",
        "image": "assets/img/products/products3.jpg",
        "price": 49,
        "quantity": 1
      },
      {
        "id": 4,
        "product": "Bowl with rubber toy",
        "image": "assets/img/products/products4.jpg",
        "price": 60,
        "quantity": 1
      },
      {
        "id": 5,
        "product": "Stack pet collars",
        "image": "assets/img/products/products5.jpg",
        "price": 90,
        "quantity": 1
      },
      {
        "id": 6,
        "product": "Dog toy",
        "image": "assets/img/products/products6.jpg",
        "price": 15,
        "quantity": 1
      },
      {
        "id": 7,
        "product": "Plastic muzzle",
        "image": "assets/img/products/products7.jpg",
        "price": 29,
        "quantity": 1
      },
      {
        "id": 8,
        "product": "Pet toy",
        "image": "assets/img/products/products8.jpg",
        "price": 25,
        "quantity": 1
      },
      {
        "id": 9,
        "product": "Pet chair",
        "image": "assets/img/products/products9.jpg",
        "price": 150,
        "quantity": 1
      },
      {
        "id": 10,
        "product": "Pink ceramic cat bowl",
        "image": "assets/img/products/products10.jpg",
        "price": 39,
        "quantity": 1
      },
      {
        "id": 11,
        "product": "Red dog bed",
        "image": "assets/img/products/products11.jpg",
        "price": 125,
        "quantity": 1
      },
      {
        "id": 12,
        "product": "Pet carrier",
        "image": "assets/img/products/products12.jpg",
        "price": 39,
        "quantity": 1
      },
      {
        "id": 13,
        "product": "Traveling petcarrier",
        "image": "assets/img/products/products13.jpg",
        "price": 125,
        "quantity": 1
      },
      {
        "id": 14,
        "product": "Chihuahua dogs bed",
        "image": "assets/img/products/products14.jpg",
        "price": 155,
        "quantity": 1
      },
      {
        "id": 15,
        "product": "Pet carrier",
        "image": "assets/img/products/products15.jpg",
        "price": 39,
        "quantity": 1
      },
      {
        "id": 16,
        "product": "Pet carrier",
        "image": "assets/img/products/products17.jpg",
        "price": 39,
        "quantity": 1
      },
      {
        "id": 16,
        "product": "Pet carrier",
        "image": "assets/img/products/products16.jpg",
        "price": 39,
        "quantity": 1
      },
      {
        "id": 17,
        "product": "Automatic dog blue leash",
        "image": "assets/img/products/products2.jpg",
        "price": 75,
        "quantity": 1
      },
      {
        "id": 18,
        "product": "Automatic dog blue leash",
        "image": "assets/img/products/products3.jpg",
        "price": 49,
        "quantity": 1
      },
      {
        "id": 19,
        "product": "Bowl with rubber toy",
        "image": "assets/img/products/products4.jpg",
        "price": 60,
        "quantity": 1
      },
    ]
  }
  openDetailProduct(data: any, content: any) {
    // console.log(data, 'sddssd')
    this.isProductDetail = data;
    this.modalService.open(content,
      { windowClass: 'productsQuickView', centered: true })
    // this.modalReference.close("submitted");
  }


  AddQty(isProductDetail: any) {
    this.cartservice.AddQty(isProductDetail);
    let isData = this.cartservice.getCartDetails;
    console.log(isData, 'isData', isProductDetail.quantity);
    isData.map((v: any): void => {
      if (v.product == isProductDetail.product) {
        console.log('isProduct===>>>', isProductDetail)
        v['quantity'] = this.isProductDetail.quantity;
      }
    })
    this.cartservice.saveCart('product_details', isData)
  }

  minusQty(isProductDetail: any) {
    if (this.isProductDetail.quantity > 0)
      this.cartservice.minusQty(isProductDetail);
    // console.log(this.isProductDetail.quantity)
  }

  addToCart(item: any) {
    if (!this.cartservice.itemInCart(item)) {

      item.quantity = this.isProductDetail.quantity;
      // item.quantity = 1
      this.cartservice.addTocart(item);
      this.items = [...this.cartservice.getItems()];
      this.cartservice.saveCart('product_details', this.items);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'product added in cart',
        showConfirmButton: false,
        timer: 1500
      })

    }
  }

  addToWishlist(wish: any) {
    if (!this.cartservice.itemInCart(wish)) {
      this.cartservice.AddTowish(wish);
      console.log(wish, 'wishlist');
      this.wish = [...this.cartservice.getWishlist()];
      this.cartservice.saveCart("wishlist_product", this.wish);
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'product added in wishlist',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

