export interface Project{
  image: string;
  title: string;
  date: string;
  description: string;
  subDescription: string;
  tags: string[];
  linkProject: string;
  linkGit: string;
}

export const projects:Project[] = [
  {
    image: "../assets/img/loja-proway.jpg",
    title: "Loja ProWay - E-commerce",
    date: "25/02/2024",
    description: "Foi desenvolvido um projeto de E-commerce com ANGULAR utilizando rotas, módulos, serviços e componentes.",
    subDescription: "O programa permite buscar por produtos de qualquer lugar na página, adicionar itens ao carrinho, editar carrinho e calcular os valores totais.",
    tags: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Components"],
    linkProject: "https://andersonmourato.github.io/projeto-loja-proway/",
    linkGit: "https://github.com/AndersonMourato/projeto-loja-proway"
  },

  {
    image: "../assets/img/cadastro-alunos.jpg",
    title: "Calcular Média/Aprovação de Alunos",
    date: "02/03/2024",
    description: "Um programa simples mas intuitivo para calcular a média de alunos e verificar se foi aprovado ou não, tudo isso renderizado na tela em tempo real, sem a necessidade de redirecionar a página ou carregar.",
    subDescription: "As informações ficam salvas no cache do navegador.",
    tags: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript", "Components"],
    linkProject: "https://andersonmourato.github.io/Desafio-Start-By-Capgemini/",
    linkGit: "https://github.com/AndersonMourato/Desafio-Start-By-Capgemini"
  },

  {
    image: "../assets/img/todo-list-react.jpg",
    title: "To-do List",
    date: "01/09/2023",
    description: "Esse Todo List foi desenvolvido brincando com React, trabalhando components e hooks",
    subDescription: "",
    tags: ["React", "HTML", "CSS", "JavaScript", "Components"],
    linkProject: "https://andersonmourato.github.io/todolist/",
    linkGit: "https://github.com/AndersonMourato/todolist"
  },

  {
    image: "../assets/img/blog-angular.jpg",
    title: "Blog-Angular",
    date: "12/12/2023",
    description: "Bootcamp Coding The Future Banco PAN - Desenvolvimento Frontend com Angular.",
    subDescription: "Trabalhando components de forma prática, eficaz e explorando as routs.",
    tags: ["Angular", "HTML", "CSS", "TypeScript", "JavaScript", "Components"],
    linkProject: "https://andersonmourato.github.io/blog-angular/",
    linkGit: "https://github.com/AndersonMourato/blog-angular"
  },


] 