import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-tarcking',
  templateUrl: './order-tarcking.component.html',
  styleUrls: ['./order-tarcking.component.css']
})
export class OrderTarckingComponent implements OnInit {
  orderForm!:FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formbuilder.group({
      orderId:['',Validators.required],
      Billing_email:['',Validators.required]
    });
  }

  get f()
  {
    return this.orderForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;

    if(this.orderForm.invalid)
    {
      return;
    }
    console.log(JSON.stringify(this.orderForm.value,null,2));

  }

}
