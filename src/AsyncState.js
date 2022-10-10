import React  from "react";

class AsyncStateComp extends React.Component{
constructor(props){
    super(props)
    this.state = {
        somthing: ''
    }
}
    render(){



    return(
        <div>
<button onClick={this.changeState.bind(this)}> call ststes </button>
<div> {this.state.somthing}</div>
        </div>
    )
}
}