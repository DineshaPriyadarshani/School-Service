import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public form: FormGroup;
    public user: any;

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
    this.form = this._formBuilder.group({
        name: ['', [Validators.required]],
        address: [''],
        phoneNumber: ['', [Validators.required]],
        occupation: [''],
        contactNumber: ['', [Validators.required]]
    });
    this.form.disable();
  }

    public initVariablesArray() {
        return this._formBuilder.group({
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            validator_name: ['', [Validators.required]],
            validation_policy: ['', [Validators.required]],
        });
    }

    public get formData() { return this.form.get('variables') as FormArray; }

    public addRange() {
        const control = this.form.controls['variables'] as FormArray;
        control.push(this.initVariablesArray());
    }

  private getUsers() {
      const id = localStorage.getItem('phoneNumber');
      this.apiService.getUsers().subscribe(data => {
          this.user = data;
          this.form.setValue({
              name: this.user[0].name,
              address: this.user[0].address,
              phoneNumber: this.user[0].phoneNumber,
              occupation: this.user[0].occupation,
              contactNumber: this.user[0].contactNumber
          });
      });
  }

  public editUser() {
      this.form.enable();
  }
}
