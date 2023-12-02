//Para quando não se sabe o tipo. 
//Evitará problemas no código.
//Any !== Unknown. 
//Todos os tipos podem ser atribuidos a 'Unknowm'.


let valorVariavel: unknown;

valorVariavel = true;
console.log(valorVariavel);
valorVariavel = 123;
console.log(valorVariavel);
valorVariavel = ['Mercedez', 'Ferrari', 'RBR', 'Aston Martin', 'McLaren', 'Alpine', 'Alpha Tauri', 'Alfa Romeo', 'Williams', 'Haas'];
console.log(valorVariavel);
valorVariavel = 'F1 2023, Max Verstappen championchip.';
console.log(valorVariavel);