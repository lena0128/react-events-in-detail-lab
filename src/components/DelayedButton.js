// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component{

    // By the time the setTimeout fires, the event object will have already been returned to the pool. 
    // We can fix this by calling e.persist()
    handleClick = (e) => {
        e.persist();
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
        }
        

    render(){
        return(
            <button onClick={this.handleClick}>Delayed</button>
        )
    }
}

export default DelayedButton