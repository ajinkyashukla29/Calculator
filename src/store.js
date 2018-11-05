import { createStore } from 'redux'
import calculator from './components/Calculator/reducers/reducer'

const store = createStore(calculator)

export default store;

store.subscribe(() => console.log(store.getState()))
