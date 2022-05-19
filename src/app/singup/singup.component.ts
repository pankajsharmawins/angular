import { Component, OnInit,NgModule } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})

export class SingupComponent implements OnInit {

  password1:any;
  password2:any;

  constructor(private router: Router, private toastr:ToastrService) { }
  sinngupForm!:NgForm
  ngOnInit(): void {
  }
  loginForm(sinngupForm:any){
    const datavalues = sinngupForm
  }

  ShowSuccess(){
    
    this.toastr.success('signup succes','thank you',{timeOut:5000})
    this.router.navigate(['/'])
  }
}

