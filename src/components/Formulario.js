import React from 'react';
import Error from './Error';
import shortId from 'shortid';
//store
import { defineName, defineAmount, errorMessage } from '../store/formulario/action';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {

    return{
        data: state.formReducer
    }

}


const Formulario = ({data, defineName, defineAmount, errorMessage, updateExpense, setCreateExpense}) => {

    //Creamos variables
    const { name, amount, error} = data;

    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar

        if( amount < 1 || isNaN(amount) || name.trim() === ''){
            errorMessage(true);
            return;
        }

        //Guardar ERror
        errorMessage(false);

        //Construir gasstos
        const expense = {
            name,
            amount,
            id: shortId.generate()
        }

        // pasar el gasto al componente principal
        //guardarGasto(gasto);
        setCreateExpense(true);
        updateExpense(expense);


        //Resetear formulario
        defineName('');
        defineAmount(0);   
    }


    return( 

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => defineName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={amount}
                    onChange={e => defineAmount(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

    );
}

Formulario.propTypes = {
    updateExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
    errorMessage: PropTypes.func.isRequired,
    defineAmount: PropTypes.func.isRequired,
    defineName: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {defineName, defineAmount, errorMessage})(Formulario);