function Saudacao({nome}){

 const gerarSaudacao = () => `Olá, ${nome}, tudo bem?`;

 return(
  <>
    {nome && <p>{gerarSaudacao()}</p>}
  </>
 );
};

export default Saudacao;