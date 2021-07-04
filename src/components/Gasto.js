import React from 'react'
import PropTypes from 'prop-types';

const Gasto = ({expense}) => {

    const {name, amount} = expense;

    return(
        <li className="gastos">
            <p>
                {name}
                <span className="gasto">$ {amount}</span>
            </p>
        </li>
    );
}

Gasto.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Gasto;