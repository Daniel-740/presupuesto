

const initialState = {
    budget: 0,
    error: false
}

const Statebudget = (state = initialState, action) => {
    
    switch (action.type) {

        case 'DEFINE_BUDGET':
                
            return{
               budget: action.payload
            }
    
        case 'ERROR_MESSAGE':

            return{
                error: action.payload
            }

        default:
            return state;
    }

}

export default Statebudget;

export const currentBudget = (state) => {
    return state.budgetReducer.budget;
}

export const currentError = (state) => {
    return state.budgetReducer.error;
}
