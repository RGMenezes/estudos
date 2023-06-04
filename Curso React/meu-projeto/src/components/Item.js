import PropTypes from "prop-types";

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
};

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
    marca: "Marca não encontrada",
    ano_lancamento: 0,
};

export default Item;