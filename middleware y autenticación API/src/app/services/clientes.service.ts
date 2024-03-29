import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/clients'
  }

  getAll() {

    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('gym_token')!
      })
    }

    return firstValueFrom(
      this.httpClient.get(this.baseUrl, httpOptions)
    );
  }


}
