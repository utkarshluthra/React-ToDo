/* eslint-disable */

import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (prevState, action)=>{
    switch(action.type){
        case "TOGGLE":
            return {todos:prevState.todos.map(
                    t=>{
                        if(t.id===action.payload){
                            t.complete = !(t.complete)
                    };
                    return t}
                    )}
        case "REMOVE":
            return {todos: prevState.todos.filter(
                todos=>todos.id !== action.payload
            )}
        case "ADD":
            return {todos: [...prevState.todos, action.payload]}
        default:
            return prevState
    }
}
export class Provider extends Component {
    state = {
        todos:[
            {
                id:1,
                title:["Check Mail"],
                completed:false
            },
            {
                id:2,
                title:["Check Instagram"],
                completed:false
            },
            {
                id:3,
                title:["Check SnapChat"],
                completed:false
            },

        ],
        dispatch:(action)=> this.setState(prevState => reducer(prevState, action))
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