import { useState } from "react";
import Card from "./Card";
import styles from "./Form.module.css"

const Form=() =>{
    const[name, setName]= useState("");
    const[place, setPlace]= useState("");
    const[error, setError]= useState("");
    const[showCard, setShowCard]=useState(false);

    const onChangeName=(e)=>{
        setName(e.target.value)}

    const onChangePlace=(e)=>{setPlace(e.target.value)}

    const normalizeInput= (par)=>{
        return par.trim().toUpperCase()
    }
    const validateName= ()=>{
        const parameter= normalizeInput(name)
        setName(parameter)
        return parameter.length >=3
    }

    const validatePlace=()=>{
        const parameter = normalizeInput(place)
        setPlace(parameter)
        return parameter.length >=6
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const isValidName= validateName();
        const isValidPlace= validatePlace();

        if(!isValidName || !isValidPlace){

            setError("Por Favor Verifica que los datos ingresados sean correctos. Nombre debe contener al menos 3 caracteres. Lugar en el mundo debe contener al menos 6 caracteres")
            setShowCard(false)
        }else{
            setError("")
            setShowCard(true)
        }
    }


    return(
        <div className={styles.principalDiv}>
            <h1>¡Hola bienvenido!. Ingresa tu lugar en el mundo</h1>
            <div className={styles.formDiv}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Ingresa tu nombre" onChange={onChangeName} value={name}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingresa tu lugar en el mundo" onChange={onChangePlace} value={place}/>
                    </div>
                    <button className={styles.buttonSubmit} type="submit">Enviar</button>
                </form>
            </div>
            {error? <div className={styles.error}> {error}</div>: null}
            {showCard ? <Card name={name} place={place}></Card> :null}

        </div>
    )
}

export default Form