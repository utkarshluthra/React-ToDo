import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        todo:[
            {
                id:1,
                title:"Check Mail",
                completed:false
            },
            {
                id:2,
                title:"Check Instagram",
                completed:false
            },
            {
                id:3,
                title:"Check SnapChat",
                completed:false
            },

        ]
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer