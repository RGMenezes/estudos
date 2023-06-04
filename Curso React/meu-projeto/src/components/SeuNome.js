function SeuNome({setNome}){
 return(
  <div>
    <label htmlFor="nome">Digite seu nome: </label>
    <input  type="text" id="nome" name="nome" 
    placeholder="Digite seu nome aqui!"
    onChange={(e) => setNome(e.target.value)}
    />
  </div>
 );
};

export default SeuNome;