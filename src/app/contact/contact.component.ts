import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  nome:string = "";
  email:string = "";
  message:string = "";
  
  constructor( private ApiService: ApiService ) {}

  ngOnInit(): void {}
  
  sendEmail(){    
    const dados = {
      nome: this.nome,
      email: this.email,
      message: this.message
    };

    /*
      const formData = new FormData();
      formData.append('nome', this.nome);
      formData.append('email', this.email);
      formData.append('message', this.message);
    */
    this.ApiService.sendEmail( dados );

    alert("Enviado!");
    this.nome = "";
    this.email = "";
    this.message = "";

  }

}
