import {useState} from 'react';

function ConponenteCondicional(){

 const [email, setEmail] = useState();
 const [useremail, setUseremail] = useState();

 function enviarEmail(e){
    e.preventDefault();

    setUseremail(email);
 };

 function limparEmail(e){
    setUseremail('');
 };

 return(
  <div>
    <h2>Cadastre seu e-mail</h2>
    <form>
        <input 
         type="text"
         placeholder='Coloque seu e-mail'
         onChange={(e) => setEmail(e.target.value)}
        />

        <button
         type='submit'
         onClick={enviarEmail}
        >
         Enviar e-mail
        </button>

        {useremail && (
         <div>
            <p>O e-mail do usuário é: {useremail}</p>
            <button
             onClick={limparEmail}
            >
             Limpar e-mail
            </button>
         </div>
        )};

    </form>
  </div>
 );
};

export default ConponenteCondicional;