import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Accessing page based on thier exact page after authentication
  constructor(private auth: AuthService, private router:Router){
   auth.user$.subscribe(user=>{
     if(user){
       let returnUrl = localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
       
     }
   })
  }
}
