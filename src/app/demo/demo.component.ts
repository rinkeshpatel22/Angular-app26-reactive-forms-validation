import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  public demoFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.demoFormGroup = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
    });
  }

  public onFormSubmit(): void {

    if (this.demoFormGroup.invalid) {
      this.demoFormGroup.get('fname').markAsTouched();
      this.demoFormGroup.get('lname').markAsTouched();
      this.demoFormGroup.get('email').markAsTouched();
      return;
    }
    var name = this.demoFormGroup.value.fname + " " + this.demoFormGroup.value.lname;
    var email = this.demoFormGroup.value.email;
    alert("Submitted : \n Name: " + name + "\n Email: " + email);
  }
}
