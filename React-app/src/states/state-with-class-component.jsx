import { Component } from "react";

class StateWithCC extends Component {
    constructor (props){
    super (props);
    this.state = {
        counter: 0,
        name : "rahul",
        city : "pune",
    };
}

render(){
    return(
        <div>
            <p>Counter : {this.state.counter}</p>
            <button onClick={()=>{
                this.setState({counter : this.state.counter + 1});
            }}
            >
                Increment
                </button>
            <button onClick={()=>{
                this.setState({counter : this.state.counter - 1});
            }}>
                Decrement
            </button>
        </div>
    );
}
}

export default StateWithCC;