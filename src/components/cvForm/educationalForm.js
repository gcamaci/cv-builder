import React, { useState } from "react";

const SectionForm = ({id,labels,eduChange, eduAdd, }) => {
    const [formState, setFormState] = useState({
        name: "",
        title: "",
        startYear: "",
        endYear: "",
        description: "",
    });
    const changeFormState = (e) => {
        const { name, value } = e.target;
        const newFormState = {
            ...formState,
            [name]: value,
        };
        setFormState(newFormState)
        eduChange(id,newFormState)
    };
    
    const submitState = () => {
        eduAdd(formState)
    }

    return (
        <div>
          <label>{labels.name}</label>
          <input onChange={changeFormState} type="text" name="name" />
    
          <label>{labels.title}</label>
          <input onChange={changeFormState} type="text" name="title" />
    
          <label>Start</label>
          <input onChange={changeFormState} type="text" name="startYear" />
    
          <label>End</label>
          <input onChange={changeFormState} type="text" name="endYear" />
    
          <label>Description</label>
          <input onChange={changeFormState} type="text" name="description" />
    
          <button onClick={submitState} id={id} type="button">
            Add
          </button>
        </div>
    );
}





/*
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

        this.changeFormState = this.changeFormState.bind(this)
        this.submitState = this.submitState.bind(this)
    }

    setFormState(e){
        const { name, value } = e.target
        this.setState({
       //spread personal object to only select and update value of specific property
            ...this.state,
            [name]:value,
        })
        
    }

    async changeFormState(e){
        const {id,eduChange} = this.props
        await this.setFormState(e)
        //says await is unecessary but it works?
        eduChange(id,this.state)
        
    }
    submitState(){
        const {eduAdd} = this.props
        eduAdd(this.state)
    }

    
    render(){
        console.log(this.props)
        const {id,labels} = this.props
        
        
        return(
            <div>
                <label>{labels.name}</label>
                <input onChange={this.changeFormState} type='text' name='name'></input>

                <label>{labels.title}</label>
                <input onChange={this.changeFormState} type='text' name='title'></input>

                <label>Start</label>
                <input onChange={this.changeFormState} type='text' name="startYear"></input>

                <label>End</label>
                <input onChange={this.changeFormState} type='text' name="endYear"></input>

                <label>Description</label>
                <input onChange={this.changeFormState} type='text' name='description'></input>

                <button onClick={this.submitState} id={id} type="button">Add</button>
            </div>
        )
    }
}
*/
export { SectionForm }