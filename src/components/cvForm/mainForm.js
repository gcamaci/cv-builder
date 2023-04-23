import React from "react";
import '../../styles/form.css'
import { Personal } from "./personal";
import { Section } from "./section";
import { SectionForm } from "./credentialForm";

const CvForm = ({ 
  genInfoChange, 
  updateEdu, 
  addEdu,
  updateExp,
  addExp

  //adding other functions for now as props passed by main and entered to section
}) => {
    return (
      <form className="form">
        <Personal nameChange={genInfoChange} />
        <Section title={"Education"} updateForm={updateEdu} addFormInfo={addEdu} Form={SectionForm} />
        <Section title={"Experience"} updateForm={updateExp} addFormInfo={addExp} Form={SectionForm}/>
      </form>
    );
  };


export { CvForm }