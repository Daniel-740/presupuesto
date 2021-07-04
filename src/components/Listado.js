import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({expenses}) => {

    return(

        <div className="gastos-realizados">
            <h2>Gastos realizados</h2>
            {expenses.map(expense => (
                <Gasto 
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}

Listado.propTypes = {
    expenses: PropTypes.array.isRequired
}

export default Listado;