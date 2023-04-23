import React, { useState } from "react";

const SectionForm = ({id,labels,formChange, addForm }) => {
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
        formChange(id,newFormState)
    };
    
    const submitState = () => {
        addForm(formState)
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

export { SectionForm }