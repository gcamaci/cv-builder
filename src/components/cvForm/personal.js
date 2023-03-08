/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Personal extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const {nameChange} = this.props
        return (
            <fieldset>
                <label htmlFor="first-name"></label>
                <input onChange={nameChange} type='text' id="first-name" name='name'></input>
            </fieldset>
        )
    }
}

export { Personal }