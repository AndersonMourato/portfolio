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
    image: "https://github.com/AndersonMourato/projeto-loja-proway/raw/main/src/assets/capture/captura-de-tela-2024-03-10-235626.png",
    title: "Loja ProWay - Programa Start By Capgemini",
    date: "25/02/2024",
    description: "Front end desenvolvido em Angular, muito produtivo com recursos que permitem;",
    subDescription: "buscar produto em qual quer pagina do site, adicionar ou remover itens do carrinho, editar carrinho e ver o valor total do carrinho. Exploramos bastante rotas, módulos e serviços.",
    tags: ["HTML", "CSS", "TypeScript", "Angular", "Components"],
    linkProject: "https://andersonmourato.github.io/projeto-loja-proway/",
    linkGit: "https://github.com/AndersonMourato/projeto-loja-proway"
  },

  {
    image: "https://github.com/AndersonMourato/Desafio-Start-By-Capgemini/raw/main/src/assets/captura-de-tela-2024-03-14-110713.png",
    title: "Projeto teste pra ver se fica bom, bp, testado mesmo",
    date: "22/01/2024",
    description: "sçldfmkaldsnfmkalwsndfgsd sadlfmasdklçfm ",
    subDescription: "",
    tags: ["tag1", "tag2", "tag6", "tag5"],
    linkProject: "string",
    linkGit: "string"
  },

  {
    image: "",
    title: "Loja ProWay - Programa Start By Capgemini",
    date: "25/02/2024",
    description: "Front end desenvolvido em Angular, muito produtivo com recursos que permitem;",
    subDescription: "buscar produto em qual quer pagina do site, adicionar ou remover itens do carrinho, editar carrinho e ver o valor total do carrinho. Exploramos bastante rotas, módulos e serviços.",
    tags: ["HTML", "CSS", "TypeScript", "Angular", "Components"],
    linkProject: "https://andersonmourato.github.io/projeto-loja-proway/",
    linkGit: "https://github.com/AndersonMourato/projeto-loja-proway"
  },

  {
    image: "",
    title: "Projeto teste pra ver se fica bom, bp, testado mesmo",
    date: "22/01/2024",
    description: "sçldfmkaldsnfmkalwsndfgsd sadlfmasdklçfm ",
    subDescription: "",
    tags: ["tag1", "tag2", "tag6", "tag5"],
    linkProject: "string",
    linkGit: "string"
  },


] 