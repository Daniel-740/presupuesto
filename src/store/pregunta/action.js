
const defineBudget = (budget) =>{

    return{
        type: 'DEFINE_BUDGET',
        payload: budget
    };
}

const errorMessage = (data) =>{
    return{
        type: 'ERROR_MESSAGE',
        payload: data
    };
}

export { defineBudget, errorMessage }