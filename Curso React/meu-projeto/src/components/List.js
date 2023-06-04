import Item from './Item';

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1950} />
                <Item marca="Mercedez" ano_lancamento={1977} />
                <Item marca="Renault" ano_lancamento={1998} />
                <Item marca="VolksWagen" ano_lancamento={1987} />
                <Item marca="Scania" ano_lancamento={1967} />
                <Item marca="Volvo" ano_lancamento={1987} />
                <Item marca="Bugati" ano_lancamento={1959} />
                <Item marca="BMW" ano_lancamento={1996} />
                <Item />
            </ul>
        </>
    );
};

export default List;