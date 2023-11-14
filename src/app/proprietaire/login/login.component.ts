import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = 'awa80598@gmail.com';
  password: string = '80598@doum';

  constructor(private loginService: LoginService) {}

  login() {
    // Check if the email and password match your predefined values
    if (this.email === 'awa80598@gmail.com' && this.password === '80598@doum') {
      // Navigate to the 'accueil-awa' page
      this.loginService.navigateAccueilAwa();
    } else {
      // Handle incorrect credentials if needed
      console.error('Incorrect email or password');
    }
  }
}
