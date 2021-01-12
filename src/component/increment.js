import React, { Component } from "react"

class Increment extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: props.number
        }
    }


    addOne(state){
        this.setState({number: state.number + 1});
    }

    minusOne(state){
        if(state.number === 0){
            return alert("it is zero already.")
        }
        this.setState({number: state.number - 1});
    }


    render(){
        return(
            <div>
                {this.state.number}
                <br />
                <button onClick = {() => this.minusOne(this.state)}>
                    -1
                </button>
                <button onClick = {() => this.addOne(this.state)}>
                    +1
                </button>





            </div>
        )
    }
}


export default Increment;