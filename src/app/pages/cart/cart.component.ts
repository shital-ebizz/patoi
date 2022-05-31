import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart_product: any;
  items: any = [];
  product_Item: any;
  total1: any = 0;
  total: any = 0;
  public shipping: any;
  shipvalue: any;
  constructor(public cartservice: CartService) { }

  ngOnInit() {
    this.cart_product = this.cartservice.getCartDetails;
    // localStorage.setItem('product_total', JSON.stringify(this.total1))
    this.isTotalUpdated();
  }


  isTotalUpdated() {
    this.shipping = 30;
    this.total = 0;
    this.cart_product.map((v: any) => {
      Object.assign(v, { isTotal: v.price * v.quantity })
      this.total = Number(this.total) + Number(v.isTotal)
      console.log(this.total, 'subtotal');
      this.shipvalue = this.total + this.shipping;
      console.log("shipping value", this.shipvalue);
      // localStorage.setItem('shipping_cost', JSON.stringify(this.shipvalue))
      this.cartservice.saveCart('shipping_cost', (this.shipvalue))
      this.cartservice.saveCart('subtotal_cost', (this.total))
    })
    //localStorage.setItem(JSON.stringify("after shipping", this.shipvalue))
  }

  cartAddQty(isProductDetail: any) {
    this.total = 0;
    // if (isProductDetail.quantity > 0)
    //   isProductDetail.quantity++;
    this.cartservice.AddQty(isProductDetail)

    this.cart_product.map((v: any) => {
      Object.assign(v, { isTotal: v.price * v.quantity })
      this.total = Number(this.total) + Number(v.isTotal)

      console.log(this.total1, 'total1', 'sd', Number(v.isTotal));

      this.cartservice.saveCart('product_Quantity', (this.total1))
      this.isTotalUpdated();
    })
  }

  cartMinus(isProductDetail: any) {
    this.total = 0;
    // if (isProductDetail.quantity > 1)
    //   isProductDetail.quantity--;
    this.cartservice.minusQty(isProductDetail);
    this.cart_product.map((v: any) => {
      Object.assign(v, { isTotal: v.price * v.quantity })
      this.total = Number(this.total) + Number(v.isTotal);
    })
    this.cartservice.saveCart('product_Quantity', (this.total))
    this.isTotalUpdated();
    // localStorage.setItem('product_Quantity', JSON.stringify(this.total1));
  }


  removeFromCart(isProductDetail: any) {
    Swal.fire({
      title: 'Do you want to delete product?',
      showDenyButton: false,

      confirmButtonText: ' yes delete it',

    })
      .then((result) => {
        let index = this.cart_product.findIndex((o: any) => o.id === isProductDetail.id);
        // delete index;
        if (index > -1) {
          this.cart_product.splice(index, 1);
        }
        localStorage.setItem('product_details', JSON.stringify(this.cart_product));
        this.isTotalUpdated();

      })


  }




}


