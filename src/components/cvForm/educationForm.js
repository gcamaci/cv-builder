import React, {Component} from "react";

class Education extends Component{
    constructor(){
        super()

        this.renderEducationForm = this.renderEducationForm.bind(this)
    }


    renderEducationForm = () => {
        console.log('working')
        return(
            <div>
                <label>School</label>
                <input type='text'></input>
                <label>Degree</label>
                <input type='text'></input>
                <label>Description</label>
                <input type='text'></input>
            </div>

        )
    }
    render(){
        return(
            <div>
                <h1>Education</h1>
                <button onClick={this.renderEducationForm} type="button">+</button>
            </div>
        )
    }
}

export {Education}

