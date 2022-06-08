import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  $url = "http://127.0.0.1:8000";//define a url do laravel para saber o back-end

  constructor(private http:HttpClient) { 
    
  };

   function listacategorias(){
    return this.http.get(`${this.url}/categorias`);
  }


}
