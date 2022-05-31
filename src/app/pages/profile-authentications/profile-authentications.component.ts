import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-authentications',
  templateUrl: './profile-authentications.component.html',
  styleUrls: ['./profile-authentications.component.css']
})
export class ProfileAuthenticationsComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  submitted = false;
  submitted1 = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      login_username: ['', Validators.required],
      login_password: ['', Validators.compose([Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")])],
      login_remember: [false, Validators.requiredTrue]
    });

    this.registerForm = this.formbuilder.group({
      register_username: ['', Validators.required],
      register_email: ['', Validators.required],
      register_password: ['', Validators.compose([Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")])],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  get r() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value, null, 2))
  }

  onResiter() {
    debugger
    this.submitted1 = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2))
  }

}
