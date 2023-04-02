import React, { Component } from "react";
import '../../styles/form.css'
import { Personal } from "./personal";
import { Section } from "./section";
import { EducationForm } from "./educationalForm";


class CvForm extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        
    }

    render(){
        const { 
            onNameChange, 
            onEduChange, 
            onEduAdd 
        }  = this.props
        //this now takes 
        return(
            <form className="form">
                <Personal nameChange={onNameChange}/>
                <Section
                 eduChange={onEduChange}
                 eduAdd={onEduAdd}
                 SectionForm = {EducationForm}
                />
                
            </form>
        )
    }
}

export {CvForm}