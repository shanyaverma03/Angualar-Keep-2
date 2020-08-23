import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RouterService } from 'src/app/services/router.service';


@Injectable({
  providedIn: "root"
})
export class CanActivateRouteGuard implements CanActivate {

  private token:string;
  private isAuthen: boolean;

  constructor(private authService: AuthenticationService, private router: RouterService) {
    this.token= authService.getBearerToken();
    this.isAuthen= true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return new Promise<boolean>((resolve, reject) => {
        this.authService.isUserAuthenticated(this.token).then(resp => {
          if (!resp) {
            reject(false);
            this.router.routeToLogin();
          } else {
            resolve(true);
          }
        });
      });
  
    }
  }