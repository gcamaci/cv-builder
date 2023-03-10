import React, { Component } from "react";
import { Personal } from "./personal";
import { Education } from "./education";
import '../../styles/form.css'
class CvForm extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        
    }
    render(){
        const {onNameChange}  = this.props
        
        return(
            <form className="form">
                <Personal nameChange={onNameChange}/>
                <Education/>
            </form>
        )
    }
}

export {CvForm}