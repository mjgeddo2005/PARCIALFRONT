import styles from "./Card.module.css"
const Card= ({name,place})=>{

    return(
        <div className={styles.container}>
            <h2>¡Hola {name}!</h2>
            <p>Sabemos que tu lugar en el mundo es:</p>
            <span>{place}</span>
        </div>
    )
}
export default Card