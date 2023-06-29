import { Component } from '@angular/core';
import { User, UserCredential } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: firebase.User | null = null;
  constructor(private authService: AuthService) {

  }


  signIn() {
    this.authService.GoogleAuth();
    this.authService.afAuth.authState.subscribe(a => this.user = a)
  }
  signOut() {
    this.authService.SignOut().then((a) => console.log(a))

  }
}
