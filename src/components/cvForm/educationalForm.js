import React, {Component} from "react";
class EducationForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            title:'',
            startYear:'',
            endYear:'',
            description:''
        }

        this.changeEducation = this.changeEducation.bind(this)
        this.submitEdu = this.submitEdu.bind(this)
    }

    setEduState(e){
        const { name, value } = e.target
        this.setState({
       //spread personal object to only select and update value of specific property
            ...this.state,
            [name]:value,
        })
        
    }

    async changeEducation(e){
        const {id,eduChange} = this.props
        await this.setEduState(e)
        //says await is unecessary but it works?
        eduChange(id,this.state)
        
    }
    submitEdu(){
        const {id,eduChange,eduAdd} = this.props
        eduAdd(this.state)
    }

    
    render(){
        const {id,eduChange} = this.props
        
        return(
            <div>
                <label>School</label>
                <input onChange={this.changeEducation} type='text' name='name'></input>

                <label>Degree</label>
                <input onChange={this.changeEducation} type='text' name='title'></input>

                <label>Start</label>
                <input onChange={this.changeEducation} type='text' name="startYear"></input>

                <label>End</label>
                <input onChange={this.changeEducation} type='text' name="endYear"></input>

                <label>Description</label>
                <input onChange={this.changeEducation} type='text' name='description'></input>

                <button onClick={this.submitEdu} id={id} type="button">Add</button>
            </div>
        )
    }
}

export { EducationForm }