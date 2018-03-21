import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  server = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }

  getData(url: string) {
    // return this._http.get<any>(this.serverIp + url, {
    //   headers: new HttpHeaders()
    //     .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    //     .set('Content-Type', 'application/json')
    // });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.get(this.server + url, { headers: headers });
  }

  postData(url: string, data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.server + url, data, { headers: headers });
  }

  putData() {

  }

  deleteData() {

  }

}
