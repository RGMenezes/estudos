//Inputs
const user: object = {
    name: "Rafael",
    lastName: "Menezes",
    cpf: 12312312312,
    creditLimit: 1000000  
};

const choseCar: object = {
    brand: "Ferrari",
    name: "F150",
    type: "sport",
    model: "sedan"
     
};

//Objetos, arrays e variaveis fixas
const carStock: object[] = [
    {
        brand: "Toyota",
        name: "Corola",
        type: "casual",
        model: "sedan",
        price: 50000
    },
    {
        brand: "Ferrari",
        name: "Four",
        type: "sport",
        model: "hatch",
        price: 800000
    },
    {
        brand: "BMW",
        name: "I7",
        type: "lux",
        model: "sedan",
        price: 350000
    }
];

//Funções

const findCar = (car: any, price: number, stock: object[]) =>{
    const bestChoice: any[] = new Array(stock.length);

    stock.map((item: any, index: number) => {
        let cont: number = 0;

        if(car.brand == item.brand){ cont++ };
        if(car.name == item.name){ cont++ };
        if(car.type == item.type){ cont++ };
        if(car.model == item.model){ cont++ };
        if(price >= item.price){cont++} else { cont = 0};

        bestChoice[index] = cont;
    });

    
    function findBestCar(value: number){
        for(let index: number = value; 0 <= index; index--){
            for(let item: number = 0; item < bestChoice.length; item++){
                if(bestChoice[item] == index){
                    return stock[item];
                };
            };
            if(index < 1 ){
                return false;
            };
        };
    };

    return findBestCar(5);
};



function service(user: any, car: any){
    const newCar: any = findCar(car, user.creditLimit, carStock);

    if(!newCar){
        return `Infelizmente não possuimos este ou algum tipo de carro parecido a este no estoque!`;
    }else{
        return `Carro pedido por ${user.name} = Marca: ${car.brand}, Nome: ${car.name}, Tipo: ${car.type} e Modelo: ${car.model}. Melhor carro de acordo com as demandas do usuário = Marca: ${newCar.brand}, Nome: ${newCar.name}, Tipo: ${newCar.type}, Modelo: ${newCar.model} e Preço: ${newCar.price}.`;
    };
};

console.log(service(user, choseCar));