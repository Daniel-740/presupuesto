import React, { Fragment } from 'react'
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({budget, remaining}) => {

    return(

        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget}
            </div>
            <div className={revisarPresupuesto(budget, remaining)}>
                Restante: {remaining}
            </div>
        </Fragment>
    );

}

ControlPresupuesto.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default ControlPresupuesto;