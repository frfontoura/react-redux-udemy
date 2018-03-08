import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponet from './classComponent'

ReactDOM.render(<ClassComponet label = 'Contador' initialValue={10} />, 
    document.getElementById('app'))
