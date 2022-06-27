// Como podemos melhorar o esse código usando TS?
let section = document.querySelector('.peoples') as HTMLDivElement;

enum Profissao {
    Atriz,
    Padeira
}

interface People {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: People = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz   
}

let pessoa2: People = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeira
}
    
let pessoa3: People = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: People = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeira
}

let arrayPeoples = [ pessoa1, pessoa2, pessoa3, pessoa4];

section.innerHTML = JSON.stringify(arrayPeoples);