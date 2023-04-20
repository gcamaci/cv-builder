import React, {useState} from "react";


const Section = ({updateForm, addFormInfo, Form}) => {
    const [forms, setForms] = useState([]);

    const generateLabels = (category) => {
        if(category !== 'Education') {
            return {
                name: "Company",
                title: 'Title',
                category: "Experience"
            }
        }else{
            return {
                name: "School",
                title: "Degree",
                category: "Education"
            }
        }

    }

    const addSectionForm = () => {
        const labels = generateLabels('Education');
        const newForm = ( 
            <Form 
            key={forms.length}
            id={forms.length}
            formChange={updateForm}
            addForm={addFormInfo}
            labels={labels}
            />
        )
        setForms((prevForms) => [...prevForms, newForm])
    };

    return (
        <div>
            <h1>Education</h1>
            <button onClick={addSectionForm} type="button">+</button>
            {forms}
        </div>
        
    );
}

export {Section}

