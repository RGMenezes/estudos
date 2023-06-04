function OutraLista({itens}){
 return(
  <>
   <h2>Lista de coisas boas</h2>
   {itens.length > 0 ? (
    itens.map((item, index) => (<p key={index} >{item}</p>))
   ):(
    <p>Lista vazia</p>
   )}
  </>
 );
};

export default OutraLista;