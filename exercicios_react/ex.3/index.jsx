import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component'

ReactDOM.render(
    <div>
        <Primeiro value = 'Primeiro component' />
        <Segundo value = 'Segundo component' />
    </div>,
 document.getElementById('app'))
