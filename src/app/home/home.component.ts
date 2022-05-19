import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }
removeData(){
  localStorage.removeItem("access_token")
  localStorage.clear()
  this.router.navigateByUrl('/')
}
}
