/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Personal extends Component{
    constructor(){
        super()
    }
    render(){

        return (
            <fieldset>
                <label htmlFor="first-name"></label>
                <input type='text' id="first-name"></input>
            </fieldset>
        )
    }
}

export { Personal }