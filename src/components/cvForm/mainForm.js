import React, { Component } from "react";
import { Personal } from "./personal";

class CvForm extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        
    }
    render(){
        const {onNameChange}  = this.props
        
        return(
            <div>
                <Personal nameChange={onNameChange}/>
            </div>
        )
    }
}

export {CvForm}