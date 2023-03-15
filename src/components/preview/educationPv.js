import React, {Component} from "react";

class EducationSection extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {educationInfo} = this.props
        return(
            <div>
                {educationInfo.map((section,index) => {
                    return <div key={index}>
                        <h2>{section.name}</h2>
                        <p>{section.degree}</p>
                    </div>
                })}
            </div>
        )   
    }
}

export{ EducationSection }