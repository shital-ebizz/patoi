import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  key: any;
  item: any = [];
  items: any = [];
  quantity: any = 1;
  public cartData: any;
  public isProductDetail: any;


  public products: {
    id: number, product: string, image: string, price: number, quantity: number
  }[] = []


  constructor(private storageservice: StorageService) { }

  ngOnInit(): void {
    this.getData(this.key)

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

  AddQty(isProductDetail: any) {
    isProductDetail.quantity++;
    // console.log("PLUS", isProductDetail);
    let isData = this.getCartDetails;
    isData.map((v: any): void => {
      if (v.product == isProductDetail.product) {
        v['quantity'] = isProductDetail.quantity;
      }
    })

    this.saveCart('product_details', isData);
    console.log("=====", isProductDetail)
  }

  minusQty(isProductDetail: any) {
    isProductDetail.quantity--;
    console.log("minus product", isProductDetail);
    let isData = this.getCartDetails;
    isData.map((v: any): void => {
      if (v.product == isProductDetail.product) {
        v['quantity'] = isProductDetail.quantity;
      }
    })
    console.log(isData, '179')
    this.saveCart('product_details', isData);
    console.log("=====", isProductDetail)
  }

  addTocart(data: any) {
    console.log(data, 'data');
    // data.quantity = data.quantity == undefined || NaN || null ? 1 : data.quantity;
    //console.log(data, 'datadatadata')
    this.items.push(data);
    let existingItems: any = [];
    // if (localStorage.getItem('product_details')) {
    if (this.getData('product_details')) {
      existingItems = this.getCartDetails;
      existingItems = [data, ...existingItems];
      // console.log('Item Exist')
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      console.log('No item Exist');
      existingItems = [data]
    }
    this.saveCart('product_details', this.items);
  }

  AddTowish(data: any) {

    console.log(data, this.item);
    this.item.push(data);
    let existingItems1: any = [];
    if (localStorage.getItem('wishlist_product')) {
      existingItems1 = this.getWishlistRecord;
      console.log(this.getWishlistRecord, ' this.getWishlistRecord')
      existingItems1 = [data, ...existingItems1];
      console.log('Already item exit in wishlist')
    }
    else {
      console.log('No item exit in wishlist');
      existingItems1 = [data];
    }
    console.log(existingItems1, existingItems1, ' this.existingItems1')
    this.saveCart('wishlist_product', this.item);

    console.log(existingItems1, 'Item Exist ');
    localStorage.setItem('wishlist_product', JSON.stringify(this.item))
    // this.wishlist_product("wishlist_product", this.item)
  }

  getData(key: any) {
    let data = localStorage.getItem(key) || "";
    //console.log(key, 'items');
    return this.storageservice.decrypt(data);
    //return data;
  }

  get getCartDetails() {
    return this.getData('product_details') != null && this.getData('product_details') != '' ? JSON.parse(this.getData('product_details')) : [];
  }

  get getWishlistRecord() {
    // console.log(this.getData, 'aaaaaaaaaaaaa')
    return this.getData('wishlist_product') != null && this.getData('wishlist_product') != '' ? JSON.parse(this.getData('wishlist_product')) : [];
  }

  loadCart() {
    this.items = this.getCartDetails;
    this.item = this.getWishlistRecord;
    //console.log(this.item, " '''''''''''''''", this.items)
  }

  saveCart(key: any, items: any) {
    var str = this.storageservice.encrypt(JSON.stringify(items))
    //var str = JSON.stringify(items)
    localStorage.setItem(key, str);
    return str;
  }

  addQty(isProductDetail: any) {
    this.isProductDetail.quantity++;
    console.log(this.isProductDetail.quantity);
  }

  getItems() {
    return this.items;
  }

  getWishlist() {
    return this.item;
  }

  itemInCart(cartData: any) {
    return this.items.findIndex((o: any) => o.id === cartData.id) > -1 || this.item.findIndex((o: any) => o.id === cartData.id) > -1;
  }

  ProductgetById(id: number, product: any) {
    return this.products.find(p => p.id === id);

  }
}


