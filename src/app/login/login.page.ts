import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  async onLogin() {
    const validEmail = 'admin@123.com';
    const validPassword = '123456';

    if (this.email === validEmail && this.password === validPassword) {
      this.router.navigate(['/dashboard']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas. Intente de nuevo.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
