import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {Provider} from'react-redux'
import {store} from './store'
import Todo from './Todo'


const App = () => {
  return (
    
    <Provider store={store}>
      
      <Todo />
      
      </Provider>
      
  )
}

export default App