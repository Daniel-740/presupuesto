

const initialState = {
    name: '',
    amount: 0,
    error: false
}

const stateForm = (state = initialState, action) => {
    
    switch (action.type) {

        case 'DEFINE_NAME':
                
            return{
               ...state,
               name: action.payload
            }
    
        case 'DEFINE_AMOUNT':

            return{
                ...state,
                amount: action.payload
            }

        case 'ERROR_MESSAGE':

            return{
                ...state,
                error: action.payload
            }

        default:
            return state;
    }

}

export default stateForm;
