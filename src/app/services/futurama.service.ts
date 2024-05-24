import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = "https://futuramaapi.com/api/characters?page=";
  }

  getPersonajes(pagina: number) {
    return this.http.get(this.baseURL + pagina);
  }
}