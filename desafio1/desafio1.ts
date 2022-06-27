// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee: {code:number, name: string} = {
    code: 10,
    name: "John"
};
 
let corpo = document.querySelector('#corpo') as HTMLDivElement;

corpo.innerHTML = JSON.stringify(employee);