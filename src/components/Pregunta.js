import React, { Fragment } from 'react';
import Error from './Error';
//Store
import { defineBudget, errorMessage } from '../store/pregunta/action';
import { currentBudget, currentError } from '../store/pregunta/reducer';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const mapStateToProps = (state) => {
    return{
        budget: currentBudget(state),
        error: currentError(state)
    }
}

const Pregunta = ({error, budget, updateFondos, defineBudget, errorMessage}) => {


    // Submit para definir presupuesto
    const agregarPresupuesto = (e) =>{
        e.preventDefault();

        //Validar
        if( budget < 1 || isNaN(budget)){
            errorMessage(true);
            return;
        }

        // Si se pasa la validación
        errorMessage(false);
        updateFondos(budget);
        
    }

    return(      
        
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ e => defineBudget(e.target.value)}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto" 
                />
            </form>
        </Fragment>
    );

}

Pregunta.propTypes = {
    updateFondos: PropTypes.func.isRequired,
    defineBudget: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired
}


export default connect(mapStateToProps, {defineBudget, errorMessage})(Pregunta);