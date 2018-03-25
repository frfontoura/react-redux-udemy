import React from 'react'

import Header from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <Header name='Todo' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)
