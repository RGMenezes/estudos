import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.conteiner}>
            <p className={styles.conteiner__element} >Este é um componente com uma frase!</p>
        </div>
    );
};

export default Frase;