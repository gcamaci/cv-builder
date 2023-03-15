import React, {Component} from "react";
import { PersonalSection } from "./personalPv";
import { EducationSection } from "./educationPv";
import '../../styles/mainPreview.css'
class Preview extends Component{
    constructor(props){
        super(props)
         
    }

    render(){
        const {cvInfo} = this.props
        const {personal,educationList} = cvInfo
        return (
            <div className="resume-container">
                <PersonalSection personalInfo={personal}/>
                <EducationSection educationInfo={educationList}/>
                
            </div>
        )
    }
}

export{Preview}