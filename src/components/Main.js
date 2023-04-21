import React ,{ useState} from "react";
import '../styles/mainContent.css'
import { emptyState } from "./utils/emptyState";
import { CvForm } from "./cvForm/mainForm";
import { Preview } from "./preview/mainPreview";


const Main = () => {
  const [state, setState] = useState(emptyState);
  
  const personalInfoChange = (e) => {
    const { name, value}  = e.target
    setState((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]:value,
      },
    }));
  };

  const updateEducation = (index, eduInfo) => {
    setState((prevState) => ({
      ...prevState,
      educationList:prevState.educationList.map((education,i) => {
        return i === index ? eduInfo : education; 
      })

    }))
  }

  const updateExperience = (index, expInfo) => {
    setState((prevState) => ({
      ...prevState,
      experienceList:prevState.experienceList.map((experience,i) => {
        return i === index ? expInfo : experience; 
      })

    }))
  }

  const addEducation = (edu) => {
    setState((prevState) => ({
      ...prevState,
      educationList: prevState.educationList.concat(edu)

    }));
  }

  const addExperience = (experience) => {
    setState((prevState) => ({
      ...prevState,
      experienceList: prevState.experienceList.concat(experience)

    }));
  }
  return (
    <main className="main-content">
      <CvForm
      genInfoChange={personalInfoChange}
      updateEdu={updateEducation}
      addEdu={addEducation}
      updateExp={updateExperience}
      addExp={addExperience}
      />
      <Preview cvInfo={state}/>
    </main>
    
  )
}






export { Main }