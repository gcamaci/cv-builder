import React, {Component} from "react";

class PersonalSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {personalInfo} = this.props
        const { 
            name,
            last,
            title,
            address,
            phone,
            email,
            description 
        } = personalInfo
        return(
            <div className="personal-section">
                <ul>
                    {console.log(name)}
                    <li>{name}</li>
                    <li>{last}</li>
                    <li>{title}</li>
                    <li>{address}</li>
                    <li>{phone}</li>
                    <li>{email}</li>
                    <li>{description}</li>
                </ul>
            </div>
        )
    }
}

export{PersonalSection}