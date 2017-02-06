import React from 'react'
import ReactDOM from 'react-dom'


import App from './components/app.js'
import '../stylesheets/index.scss'

class Index extends React.Component{
    render(){
        return (
            <div className="index">
                <h1>Contador</h1>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.body)