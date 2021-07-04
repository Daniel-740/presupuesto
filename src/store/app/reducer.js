

const initialState = {
    budget: 0,
    remaining: 0,
    expenses: [],
    expense: {},
    question: true
}

const stateApp = (state = initialState, action) => {

    switch (action.type) {
        case 'DEFINE_BUDGET_BASE':
            
            return {
                ...state,
                budget: action.payload,
                remaining: action.payload,
                question: false
            }

        case 'DEFINE_EXPENSE':

            return{
                ...state,
                expense: action.payload
            }

        case 'SAVE_EXPENSES':

            return{
                ...state,
                expenses: [...state.expenses, action.payload]
            }

        case 'SAVE_REMAINING':

            return{
                ...state,
                remaining: action.payload
            }
    
        default:
            return state
    }

}

export default stateApp;