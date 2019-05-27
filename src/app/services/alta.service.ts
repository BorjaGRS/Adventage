import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AltaService {
guardarUser : Usuario;
  constructor(private http: HttpClient) { }
}
