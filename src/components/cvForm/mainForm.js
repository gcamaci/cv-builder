import React from "react";
import '../../styles/form.css'
import { Personal } from "./personal";
import { Section } from "./section";
import { SectionForm } from "./educationalForm";

const CvForm = ({ genInfoChange, updateHistory,addHistory}) => {
    return (
      <form className="form">
        <Personal nameChange={genInfoChange} />
        <Section updateForm={updateHistory} addFormInfo={addHistory} Form={SectionForm} />
      </form>
    );
  };


export { CvForm }