import React, {Component} from "react";
import { EducationForm } from "./educationalForm";
class Education extends Component{
    constructor(props){
        super(props)

        this.state ={
            forms:[]
        }

        this.addEducationForm = this.addEducationForm.bind(this)
    }
    addEducationForm(){
        const forms = [
            ...this.state.forms, 
            <EducationForm 
            key={this.state.forms.length} 
            id={this.state.forms.length} 
            eduChange={this.props.eduChange}
            />
        ]
        this.setState({
            forms
        });
        
    }

   
    render(){
        return(
            <div>
                <h1>Education</h1>
                <button onClick={this.addEducationForm} type="button">+</button>
                {this.state.forms}
            </div>
        )
    }
}

export {Education}

