import React,{Component} from 'react'

class CounterFunction extends Component{
    
state = {
    counter: 0,
};


    increment=()=>{
            this.setState({
                counter: this.state.counter+1
            });
    }

    decrement=()=>{
        this.setState({
            counter: this.state.counter-1
        })   
    };
    render(){
    return(
        <div>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decreent</button>
    
        </div>
    )
}
}

export default CounterFunction;

