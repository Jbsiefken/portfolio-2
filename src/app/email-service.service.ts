import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  postAPIData(){
    return this.http.post('/api/postData', {'firstName' : 'Code', 'lastName' : 'Handbook'});
  }

  postEmail(){
    return this.http.post('api/email', {'test': 'hello world'});
  }
}
