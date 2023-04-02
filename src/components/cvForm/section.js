import React, {Component} from "react";
class Section extends Component{
    constructor(props){
        super(props)

        this.state ={
            forms:[]
        }

        this.addSectionForm = this.addSectionForm.bind(this)
        this.generateLabels = this.generateLabels.bind(this)
    }
    generateLabels(category){
        if(category !== 'Education') {
            return {
                name: "Company",
                title: 'Title',
                category: "Experience"
            }
        }else{
            return {
                name: "School",
                title: "Degree",
                category: "Education"
            }
        }

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
            labels={this.generateLabels('Education')}
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

