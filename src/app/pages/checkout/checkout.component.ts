import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  billingForm!: FormGroup;
  Countries: any;
  submitted = false;
  public cart_product: any;
  constructor(private fb: FormBuilder, public cartservice: CartService) { }
  ngOnInit(): void {

    this.billingForm = this.fb.group({
      billing_firstname: [null, Validators.required],
      shipping_firstname: [null, Validators.required],

      billing_lastname: [null, Validators.required],
      shipping_lastname: [null, Validators.required],

      billing_company: null,
      shipping_company: null,

      billing_region: [null, Validators.required],
      shipping_region: [null, Validators.required],

      billing_street: [null, Validators.required],
      shipping_street: [null, Validators.required],

      billing_apratment: null,
      shipping_apratment: null,


      billing_city: [null, Validators.required],
      shipping_city: [null, Validators.required],

      billing_country: null,
      shipping_country: null,

      billing_postCode: [null, Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ],
      shipping_postCode: [null, Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ],

      billing_phone: [null, Validators.required],

      billing_email: [null, Validators.required],

      shipping_order_note: null,

      acceptTerms: ["", Validators.required]
    })

    this.cartservice.loadCart();
    this.cartservice.getItems();
    this.cart_product = this.cartservice.getCartDetails;

  }

  get f() {
    return this.billingForm.controls;
  }

  get shippingCost() {
    return this.cartservice.getData("shipping_cost");
  }

  get ProductCost() {
    return this.cartservice.getData("product_Quantity");
  }
  get product_subtotal() {
    return this.cartservice.getData("subtotal_cost");
  }

  onBilling(): void {

    this.submitted = true;

    if (this.billingForm.invalid) {
      return;
    }
    console.log(this.billingForm.value);
  }

}


