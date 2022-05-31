import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  postOrder(data: any) {
    return this.http.post<any>('http://localhost:3000/order', data)
  }

  getOrder() {
    return this.http.get<any>('http://localhost:3000/order')
  }

  putOrder(data: any, id: number) {
    return this.http.put<any>(`http://localhost:3000/order/${id}`, data)
  }

  deleteOrder(id: number) {
    return this.http.delete<any>(`http://localhost:3000/order/${id}`)
  }
}
