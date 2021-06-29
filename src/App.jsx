import React from 'react'
import { connect } from 'react-redux'

import Header from './components/header/header.component';

export const App = (props) => {
    return (
        <div>
            <Header />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
