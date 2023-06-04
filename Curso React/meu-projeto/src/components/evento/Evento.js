import Button from './Button';

function Evento(){

    function MostrarEvento(){
        alert(`O evento 1 foi disparado!`);
    };

    function SegundoEvento(){
        alert(`O evento 2 foi disparado!`);
    };

    return(    
        <div>
            <button onClick={MostrarEvento}>Click aqui!</button>
            <Button event={MostrarEvento} text="Ativar evento 1" />
            <Button event={SegundoEvento} text="Ativar evento 2" />
        </div>
    ); 
};

export default Evento;