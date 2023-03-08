import React, {Component} from "react";
import { PersonalSection } from "./personalPv";
class Preview extends Component{
    constructor(props){
        super(props)
         
    }

    render(){
        const {cvInfo} = this.props
        const {personal} = cvInfo
        return (
            <div className="resume-container">
                <PersonalSection personalInfo={personal}/>
                
                
            </div>
        )
    }
}

export{Preview}