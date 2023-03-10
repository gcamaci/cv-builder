import React, {Component} from "react";
class EducationForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            degree:'',
            startYear:'',
            endYear:'',
            description:''
        }

        this.changeEducation = this.changeEducation.bind(this)
    }


    changeEducation(e){
        const { name, value } = e.target
        this.setState({
       //spread personal object to only select and update value of specific property
            ...this.state,
            [name]:value,
        })
        console.log(this.state)
    }
    render(){
        const {id} = this.props
        return(
            <div>
                <label>School</label>
                <input onChange={this.changeEducation} type='text' name='name'></input>

                <label>Degree</label>
                <input onChange={this.changeEducation} type='text' name='degree'></input>

                <label>Start</label>
                <input onChange={this.changeEducation} type='text' name="startYear"></input>

                <label>End</label>
                <input onChange={this.changeEducation} type='text' name="endYear"></input>

                <label>Description</label>
                <input onChange={this.changeEducation} type='text' name='description'></input>

                <button onClick={()=>console.log(id)} id={id} type="button">Add</button>
            </div>
        )
    }
}

export { EducationForm }