import React, {Component} from "react";

class PersonalSection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {name,last,title,address,phone,email,desc} = this.props
        return(
            <div className="personal-section">
                <h1>{name}</h1>
            </div>
        )
    }
}

export{PersonalSection}