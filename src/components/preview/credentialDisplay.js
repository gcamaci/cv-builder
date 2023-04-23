import React from "react";

const CredentialSection = ({ title,sectionInfo }) => {
    return (
      <div>
        <h1>{title}</h1>
        {sectionInfo.map((section, index) => {
          return (
            <div key={index}>
              <h2>{section.name}</h2>
              <p>{section.title}</p>
              <p>{section.startYear}</p>
              <p>{section.endYear}</p>
              <p>{section.description}</p>
            </div>
          );
        })}
      </div>
    );
};


export{ CredentialSection }