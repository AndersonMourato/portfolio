import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }
}



/*
  - **Crie um servidor Node.js:** Desenvolva uma aplicação Node.js que exponha endpoints de API para os dados e funcionalidades que você precisa em seu aplicativo Angular. Use frameworks como Express.js ou NestJS para simplificar o desenvolvimento do lado do servidor.

  - **Comunique-se via HttpClient do Angular:** Dentro do seu aplicativo Angular, use o serviço `HttpClient` para fazer requisições HTTP aos endpoints da API do Node.js. Isso envolve construir URLs, enviar requisições (GET, POST, PUT, DELETE) e tratar as respostas (dados ou erros).

  **Exemplo (TypeScript):**

  **Servidor Node.js (exemplo Express.js):**

  ```javascript
  const express = require('express');
  const app = express();

  app.get('/api/dados', (req, res) => {
    // Simula a recuperação de dados
    const dados = { mensagem: 'Olá do Node.js!' };
    res.json(dados);
  });

  app.listen(3000, () => console.log('Servidor ouvindo na porta 3000'));
  ```

  **Serviço Angular:**

  ```typescript
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    constructor(private http: HttpClient) {}

    getDados() {
      return this.http.get<any>('/api/dados'); // Ajuste a URL e o tipo de dado conforme necessário
    }
  }
  ```

  **Componente Angular:**

  ```typescript
  import { Component, OnInit } from '@angular/core';
  import { ApiService } from './api.service';

  @Component({
    selector: 'app-meu-componente',
    templateUrl: './meu-componente.component.html',
    styleUrls: ['./meu-componente.component.css']
  })
  export class MeuComponente implements OnInit {
    dados: any;

    constructor(private apiService: ApiService) {}

    ngOnInit() {
      this.apiService.getDados().subscribe(resposta => {
        this.dados = resposta;
      });
    }
  }
  ```

*/
