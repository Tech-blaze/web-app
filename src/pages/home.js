import React, { Component } from 'react'
class home extends Component {

    constructor(props){
        super(props)
        this.state = {
            token :this.props.token
        }
    }
    render() {
   // const  p = this.state.stores.map((store)=><p>{store.Owner}</p>)
        return (
            <div>
               Home { this.state.token }
            </div>
        )
    }
}

export default home
