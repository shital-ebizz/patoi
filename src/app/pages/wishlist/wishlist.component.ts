import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public wishlist: any;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.wishlist = this.cartservice.getWishlistRecord;
  }

  removeFromCart(isProductDetail: any) {
    Swal.fire({
      title: 'Do you want to remove product?',
      showDenyButton: false,

      confirmButtonText: ' yes delete it',

    })
      .then((result) => {

        let index = this.wishlist.findIndex((o: any) => o.id === isProductDetail.id);
        // delete index;
        if (index > -1) {
          this.wishlist.splice(index, 1);
        }
        localStorage.setItem('wishlist_product', JSON.stringify(this.wishlist));
      })
  }

}
