

const defineBaseBudget = (budget) => {
    
    return{
        type: 'DEFINE_BUDGET_BASE',
        payload: budget
    };
}

const defineExpense = (expense) => {

    return{
        type: 'DEFINE_EXPENSE',
        payload: expense
    }
}

const saveExpenses = (expenses) => {
    return{
        type: 'SAVE_EXPENSES',
        payload: expenses
    }
}

const saveRemaining = (remaining) => {

    return{
        type: 'SAVE_REMAINING',
        payload: remaining
    }
}

export {defineBaseBudget, defineExpense, saveExpenses, saveRemaining}