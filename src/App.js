import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import { defineBaseBudget, defineExpense, saveExpenses, saveRemaining } from './store/app/action';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return{
      datas: state.appReducer
    }

}


function App({defineBaseBudget, defineExpense, saveExpenses, saveRemaining, datas}){

  //State
  const [ createExpense, setCreateExpense] = useState(false);

  //Creamos variables
  const { budget, remaining, expenses, expense, question } = datas;  


  //Funcion para actualizar presupuesto y restante con un reducer
  const updateFondos = (data) => {
    defineBaseBudget(data);
  }

  //funcion para actualizar un nuevo gasto con un reducer
  const updateExpense = (data) => {
    defineExpense(data);
  }

  // UseEffect que actualiza el restante
  useEffect( () => {

    
    if(createExpense){

    //Agrega el nuevo gasto
    saveExpenses(expense)

    //Resta del presupueto
    const budgetRemaining = remaining - expense.amount;
    
    saveRemaining(budgetRemaining);
    setCreateExpense(false);
    
  }

}, [ expense, createExpense, expenses, remaining, saveRemaining, saveExpenses]);



  return (

      <div className="container">
        <header>
          <h1>Presupuesto Semanal</h1>

          <div className="contenido-principal contenido">

          { question ?
                <Pregunta
                  updateFondos={updateFondos}
                />
              : 
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      setCreateExpense={setCreateExpense}
                      updateExpense={updateExpense}
                    />
                  </div>
                
                  <div className="one-half column">
                    <Listado 
                      expenses={expenses}
                    />

                    <ControlPresupuesto
                      budget={parseInt(budget)}
                      remaining={parseInt(remaining)}
                    /> 

                  </div>
  
                </div>
            } 
      

          </div>
        </header>
      </div>
  );
}

export default connect(mapStateToProps, {defineBaseBudget, defineExpense, saveExpenses, saveRemaining})(App);
