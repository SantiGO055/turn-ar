import { Injectable } from '@angular/core';
import { GoogleAuthProvider, UserCredential, UserProfile } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }


  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        console.log('You have been successfully logged in!', result);
        return result
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
    });
  }
}
