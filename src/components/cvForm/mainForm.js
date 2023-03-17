import React, { Component } from "react";
import '../../styles/form.css'
import { Personal } from "./personal";
import { Education } from "./education";
import { EducationForm } from "./educationalForm";

class CvForm extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        
    }
    render(){
        const {onNameChange, onEduChange, onEduAdd}  = this.props
        //this now takes 
        return(
            <form className="form">
                <Personal nameChange={onNameChange}/>
                <Education
                 eduChange={onEduChange}
                 eduAdd={onEduAdd}
                 SectionForm = {EducationForm}
                />
            </form>
        )
    }
}

export {CvForm}