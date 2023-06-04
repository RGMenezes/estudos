function Pessoa({nome, idade, profissao}){ //usando destructuring
    return(
        <div>
            <img src="https://via.placeholder.com/150" alt={nome} />

            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>

        </div>
    );
};

export default Pessoa;