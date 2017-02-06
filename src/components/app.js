import React from 'react'

    
//component
class App extends React.Component{
    
    constructor() {
        super()
        this.state = { contador: 0 }
    }
    
    incrementar(){
        this.setState({contador: this.state.contador + 1})
        console.log("incrementando...")
    }
    
    decrementar() {
        this.setState( {contador: this.state.contador - 1} )
        console.log("decrementando...")
    }
    
    render(){
        return (
            <div className="Nada">
                <h2>{this.state.contador}</h2>
                <div className="content__bottons">
                    <button onClick={this.incrementar.bind(this)}>+</button>
                    <button onClick={this.decrementar.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

export default App