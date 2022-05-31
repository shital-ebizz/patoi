import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  submitted= false;
  constructor(private formbuilder :FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      subject:['',Validators.required],
      msg:['',Validators.required],
      terms:['false',Validators.requiredTrue]
    })    
  }

  get f()
  {
    return this.contactForm.controls;
  }

  onSubmit()
    {
      this.submitted = true;
      
      if(this.contactForm.invalid)
      {
        return;
      }
      console.log(JSON.stringify(this.contactForm.value,null,2))
    }
}
