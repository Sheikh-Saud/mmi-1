import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment  as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   userId: any;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
      this.userId = localStorage.getItem("UserId")
      return this.http.get<any>(`${env.baseUrl}/Customers/RelatedProducts?userId=${this.userId}`)    
  }
  getSingleProduct(idProduct): Observable<any> {
    this.userId = localStorage.getItem("UserId")
    return this.http.get<any>(`${env.baseUrl}/Products/GetProduct?userId=${this.userId}&productId=${idProduct}`)
  }
  getShipment(){
    this.userId = localStorage.getItem("UserId")
    return this.http.get<any>(`${env.baseUrl}/Customers/Shipping?userId=${this.userId}`)
  }
}
