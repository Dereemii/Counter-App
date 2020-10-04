import React from 'react';
import PropTypes from 'prop-types';

//FC

const PrimeraApp = ({saludo, subtitulo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo}</p>
        </>
        );
}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,    //Valida que sea un string
}

PrimeraApp.defaultProps = {
    subtitulo: "soy un subtitulo",
}

export default PrimeraApp;