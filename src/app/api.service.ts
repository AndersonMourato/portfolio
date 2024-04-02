import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor( private http: HttpClient ){}
   
    sendEmail(dados: any) {
      const url = 'http://localhost:3000/sendemail';

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');




      this.http.post<any>(url, dados)
      .subscribe(response => {
        console.info('Sucesso:', response);
      }, error => {
        console.error('Erro:', error);
      });




      //  #Funciona mas retorna erro no console do brause
      //this.http.post<any>(url, dados).subscribe(response => {
      //  console.info('Sucesso:', response);
      //})
    }
}
  
