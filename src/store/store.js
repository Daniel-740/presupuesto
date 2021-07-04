import { createStore, combineReducers} from 'redux';
import budgetReducer from './pregunta/reducer';
import formReducer from './formulario/reducer';
import appReducer from './app/reducer';

const reducers = combineReducers({
    budgetReducer,
    formReducer,
    appReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;