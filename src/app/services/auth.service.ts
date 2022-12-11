import { inject, Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   body: object;
  constructor(private http: HttpClient,) {

  }

  getUser(username: string , password: any) : Observable<any> {
        
     return this.http.post(`${env.baseUrl}/Customers/Login`,{
      username,
      password
     })
  }
}
