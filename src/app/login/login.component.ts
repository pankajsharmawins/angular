import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: NgForm;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {}

  submit(loginForm:any) {

    const newValue = loginForm.value;

    if(newValue.email=='ab@gmail.com' && newValue.password=='Panku@1234') {
      this.router.navigate(['home'])
      debugger
      const data:any = {
        username : '',
        password : ''
      }
       this.authService.logIn(data).subscribe((res: any) => {
      const token = "1234567890qwertyuiop1234567890"
     localStorage.setItem('access_token', token);
      this.toastr.success('logout succes','thank you',{timeOut:5000})
       });
      
  }
  else{
    this.toastr.error('invalid credentials','thank you',{timeOut:5000})

  }

}

}


// userLogin(loginFor: any) {
//   const data = loginFor.value;

//   if (data.email == 'ab@gmail.com' && data.password == 'panku123') {
//     console.log('hello');
//     alert("fds")
//     this.router.navigate(['/home']);

//     // this.authService.logIn(data).subscribe((res: any) => {
//     //   const token = "1234567890qwertyuiop1234567890"
//     //  localStorage.setItem('access_token', token);

//     // 
//     // });
 

