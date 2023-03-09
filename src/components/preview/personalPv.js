import React, {Component} from "react";
import '../../styles/personalPv.css'
class PersonalSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {personalInfo} = this.props
        const { 
            name,
            title,
            address,
            phone,
            email,
            description 
        } = personalInfo
        return(
            <div className="resume-header">
                <div className="personal-section">
                    <div className="header">
                        <h1>{name}</h1>
                        <p>{title}</p>
                    </div>
                    <div>
                        <ul>
                            <li>{address}</li>
                            <li>{phone}</li>
                            <li>{email}</li>
                        </ul>
                    </div>
                </div>
                <div className="summary-section">
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export{PersonalSection}