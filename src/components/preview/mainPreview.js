import React from "react";
import { PersonalSection } from "./personalPv";
import { CredentialSection } from "./credentialDisplay";
import '../../styles/mainPreview.css'


const Preview = ({ cvInfo }) => {
    const { personal,educationList,experienceList } = cvInfo
    console.log(cvInfo)
    return (
        <div>
            <div className="resume-container">
                <PersonalSection personalInfo={personal}/>
                <CredentialSection title="Education"sectionInfo={educationList}/>
                <CredentialSection title="Experience"sectionInfo={experienceList}/>   
            </div>
        </div>
    )

}


export{ Preview }