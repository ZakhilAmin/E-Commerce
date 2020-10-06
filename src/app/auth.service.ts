import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute) {
    this.user$=afAuth.authState;
   }
  
  logIn(){
    // this part is used to query the exact url if present otherwise it will redirect to home 
    // the other part is implemented in app.component.ts
   let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl);
;    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  logOut(){
    this.afAuth.auth.signOut();
  }
}
