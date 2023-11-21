import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  // logins: login[] = [];
  constructor(private loginService: LoginService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      code: ['', Validators.required],
    });
  }
  
 

  // async login() {
  //   try {
  //     const { email, password, code } = this.loginForm.value;

  //     // Appelez la méthode de connexion du service
  //     const proprio = await this.loginService.login(email, password, code);

  //     if (proprio) {
  //       // La connexion est réussie, utilisez proprio comme nécessaire
  //       console.log('Informations du propriétaire:', proprio);

  //       // Par exemple, redirigez l'utilisateur vers la page appropriée
  //       // this.loginService.navigateAppropriatePage(proprio);
  //     } else {
  //       // Gérez la situation où les informations du propriétaire ne sont pas disponibles
  //       console.error('Aucune information sur le propriétaire disponible.');
  //     }
  //   } catch (error) {
  //     // Gérez les erreurs ici
  //     console.error('Erreur lors de la connexion:', error);
  //   }
  // }
  ngOnInit(): void {
  }
}