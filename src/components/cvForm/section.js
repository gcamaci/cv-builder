import React, {Component} from "react";
class Section extends Component{
    constructor(props){
        super(props)

        this.state ={
            forms:[]
        }

        this.addSectionForm = this.addSectionForm.bind(this)
    }
    
    addSectionForm(){
        const {eduChange,eduAdd,SectionForm} = this.props
        const forms = [
            ...this.state.forms, 
            <SectionForm 
            key={this.state.forms.length} 
            id={this.state.forms.length} 
            eduChange={eduChange}
            eduAdd={eduAdd}
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
                <button onClick={this.addSectionForm} type="button">+</button>
                {this.state.forms}
            </div>
        )
    }
}

export {Section}

