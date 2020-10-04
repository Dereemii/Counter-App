import React, { useState } from "react";
import PropTypes from "prop-types";


const CounterApp = ({ value = 10}) => {

    const [counter, setCounter] = useState( value ); //retorna un []

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1)
        //  setCounter((c) => c +1 )
    }
    //HandleSubstract
    const handelSubstract = (e) => setCounter(counter -1);

    const handleReset = (e) => setCounter(value);
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd} >+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handelSubstract}>-1</button>
        </>
    );
};

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//rafcp --> crea un componente con prop types