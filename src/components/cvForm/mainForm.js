import React, { Component } from "react";
import '../../styles/form.css'
import { Personal } from "./personal";
import { Section } from "./section";
import { EducationForm } from "./educationalForm";

const CvForm = ({ onNameChange, onEduChange, onEduAdd }) => {
    return (
      <form className="form">
        <Personal nameChange={onNameChange} />
        <Section eduChange={onEduChange} eduAdd={onEduAdd} SectionForm={EducationForm} />
      </form>
    );
  };


export { CvForm }