import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  private url:string= 'http://localhost:3000/auth/v1/';
  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {

    return this.httpClient.post(this.url,data);

  }

  setBearerToken(token) {

    localStorage.setItem('token', token);
  }

  getBearerToken() {

    return localStorage.getItem('token');
  }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpClient.post(this.url + 'isAuthenticated', {}, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();

  }
}
