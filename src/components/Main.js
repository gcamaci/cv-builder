import React ,{ useState, Component } from "react";
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




/*
class Main extends Component{
    constructor(){
        super()

        this.state = emptyState
        this.onNameChange = this.onNameChange.bind(this)
        this.setEducation = this.setEducation.bind(this)
        this.addEducation = this.addEducation.bind(this)
    }
    
    setEducation(index, eduInfo) {
        this.setState(prevState => ({
          educationList: prevState.educationList.map((education, i) => {
            if (i === index) {
              return eduInfo;
            } else {
              return education;
            }
          })
        }));        
      }
      
    setExperience(index,expInfo){
      this.setState(prevState => ({
        experienceList: prevState.experienceList.map((experience, i) => {
          if (i === index) {
            return expInfo;
          } else {
            return experience;
          }
        })
      })); 
    }

    addExperience(experience){
      this.setState({
        experienceList: this.state.experienceList.concat(experience),
      })

    }

    addEducation(edu){
      this.setState({
        educationList: this.state.educationList.concat(edu),
      })

    }
    onNameChange(e){
        //spreads the name and value of target
        const { name, value } = e.target
        this.setState({
            personal: {
                //spread personal object to only select and update value of specific property
                ...this.state.personal,
                [name]:value,
            },
        })
    }
    render(){
        
        return (
            <main className="main-content">
                <CvForm
                 onNameChange={this.onNameChange}
                 onEduChange={this.setEducation}
                 onEduAdd={this.addEducation}

                />
                <Preview cvInfo={this.state}/>
            </main>
        )
    }
}
*/

export { Main }