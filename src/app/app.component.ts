import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Accessing page based on thier exact page after authentication
  constructor(private userService: UserService, private auth: AuthService, private router:Router){
   auth.user$.subscribe(user=>{
     if(user){
      userService.save(user);
       let returnUrl = localStorage.getItem('returnUrl');
       if(returnUrl){
         localStorage.removeItem('returnUrl');
         router.navigateByUrl(returnUrl);
       }
       
       
     }
   })
  }
}
