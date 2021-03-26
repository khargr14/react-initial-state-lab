// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    renderSeconds = () => {
        if (this.state.secondsLeft == 0) {
            return (
                <div>Boom!</div>
            )
        } else {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderSeconds()}
            </div>
        )
    }
}

export default Bomb