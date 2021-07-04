

const defineName = (name) => {

    return{
        type: 'DEFINE_NAME',
        payload: name
    };
}

const defineAmount = (amount) => {

    return{
        type: 'DEFINE_AMOUNT',
        payload: amount
    }
}

const errorMessage = (error) => {

    return{
        type: 'ERROR_MESSAGE',
        payload: error
    };
}

export {defineName, defineAmount, errorMessage}