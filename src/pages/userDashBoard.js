import React, { Component } from 'react'

export class userDashBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            name:props.name
        }
    }
    render() {
        return (
            <div className="section">
                {this.props.name}
            </div>
        )
    }
}

export default userDashBoard
