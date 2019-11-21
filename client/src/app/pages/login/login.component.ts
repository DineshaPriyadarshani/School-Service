import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var dangerNotification:any;

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public form: FormGroup;

  phoneNumber: string;
  password:string;
  currentuser:any;

  constructor(private loginService:LoginService, private router:Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      phoneNumber: ['',[Validators.required]],
      password: ['', [Validators.required]]
    }); 
   }

   dangerNotification(top,center,message){
    dangerNotification(top,center,message);
  }

//    validateEmail(phone_number) {
//     var re = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
//     return re.test(String(phoneNumber).toLowerCase());
// }


  submitForm(){
    if(this.phoneNumber === "0719876789" && this.password === "abc@123") {
      console.log("success");
    }

    // var body = `phoneNumber=${this.phoneNumber}&password=${this.password}`;
    // this.loginService.login(body).subscribe((result)=>{
    //   localStorage.setItem('admin', JSON.stringify(result)); 
    //   this.router.navigate(['/dashboard']);
    //   },
    //   (err)=>{
    //     if(this.phoneNumber.length==0)
    //     {
    //       this.dangerNotification('top','center','Please enter the phone number');
    //     }
    //     // else if (!(this.validateEmail(this.phoneNumber))){
    //     //   this.dangerNotification('top','center','Please enter a valid phone number');
    //     // }
    //     else if(this.password.length==0)
    //     {
    //       this.dangerNotification('top','center','Please enter the password');
    //     }
    //     else{
    //     this.dangerNotification('top','center','Invalid username or password. Please try again');
    //     console.log(err.error);
    //     this.router.navigate(['/']);
    //     }
    //   }
    //  )
  }

}
