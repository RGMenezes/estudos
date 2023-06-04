import { useState } from 'react';

function Form(){

    const CadastrarUsuario = (e) =>{
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}.`);
    };

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <form onSubmit={CadastrarUsuario} >
            <div>
                <label htmlFor="name">Nome:</label>
                <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Nome"/>
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Senha"/>
            </div>
            <div>
                <input type="submit" value="Comfirmar"/>
            </div>
        </form>
    );
};

export default Form;