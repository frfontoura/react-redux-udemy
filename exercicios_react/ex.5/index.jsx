import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Asdf">
        <Member name="Teste1" />
        <Member name="Teste2" />
        <Member name="Teste3" />
        <Member name="Teste4" />
    </Family>, 
    document.getElementById('app'))
