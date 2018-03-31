import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import SideBar from '../common/template/sideBar'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <h1>Conteudo</h1>
        </div>
        <Footer />
    </div>
)