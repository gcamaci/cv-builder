import React, {Component} from "react";
class EducationForm extends Component{
    render(){
        return(
            <div>
                <label>School</label>
                <input type='text' name='name'></input>
                <label>Degree</label>
                <input type='text' name='degree'></input>

                <label></label>
                <input type='text' name="startYear"></input>

                <label></label>
                <input type='text' name="endYear"></input>

                <label>Description</label>
                <input type='text' name='description'></input>
                <button type="button">Add</button>
            </div>
        )
    }
}

export { EducationForm }