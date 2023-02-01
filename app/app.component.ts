import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    
  }
}
