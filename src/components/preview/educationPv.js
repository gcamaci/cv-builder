import React, {Component} from "react";

class EducationSection extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {educationInfo} = this.props
        return(
            <div>
                <h1>Education</h1>
                {educationInfo.map((section,index) => {
                    return <div key={index}>
                        <h2>{section.name}</h2>
                        <p>{section.degree}</p>
                        <p>{section.startYear}</p>
                        <p>{section.startEnd}</p>
                        <p>{section.description}</p>
                    </div>
                })}
            </div>
        )   
    }
}

export{ EducationSection }