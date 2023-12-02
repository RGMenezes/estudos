export{}

//For (of, in)
for(let cont: number = 0; cont < 10; cont++ ){
  console.log(cont);
};


type Carro = {
  marca: string;
  nome: string;
  ano: number;
};

const carro: Carro = {
  marca: 'Chevrolet',
  nome: 'Cruze',
  ano: 2019
};

for (let item in carro){
  console.log(item + ' - ' + carro[item as keyof Carro]);
};


const vendas: number[] = [1, 12, 51, 2, 65, 22];

for (let quantidade of vendas){
  console.log(quantidade);
};



//While e do while

let rodada: number = 0;
while(rodada < 5){
  rodada++;
  console.log(rodada);
};


let caixa: number = 500; 

do {
  caixa += 120;
  console.log(caixa);
} while(caixa <= 1200);