import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  nome:string = "";
  email:string = "";
  message:string = "";
  
  constructor() {}

  ngOnInit(): void {}
  
  sendEmail(){    
    const dados = {
      nome: this.nome,
      email: this.email,
      message: this.message
    };

  }

}
