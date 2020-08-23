import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../user';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   public loginUser: User;
    username = new FormControl();
    password = new FormControl();
    public submitMessage:string;

    constructor(private authService: AuthenticationService, private routerService: RouterService) {

      this.loginUser= new User();
      this.submitMessage= '';

    }


    loginSubmit() {

      this.loginUser.username= this.username.value;
      this.loginUser.password= this.password.value;
      this.submitMessage='';

      this.authService.authenticateUser(this.loginUser).subscribe(
        resp=>{
          this.authService.setBearerToken(resp['token']);
          //ROUTe to dashboard
        this.routerService.routeToDashboard();

        },
        err=> {

          this.submitMessage= err.message;
          if(err.status===403) {
            this.submitMessage='Unauthorized';
          }
          else{
            this.submitMessage=err.message;
          }
        }
      )



    }
}
