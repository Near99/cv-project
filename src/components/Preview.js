import React from "react";
import "./Preview.css";

export const Preview = (props) => {
  const {
    name,
    phone,
    email,
    github,
    linkedin,
    profile,
    fullProfileInfo,
    school,
    degree,
    start,
    end,
  } = props.inputs;
  let displayProfile;
  if (fullProfileInfo.length) {
    displayProfile = fullProfileInfo.map((profile, index) => {
      return (
        <li key={index} id={index} onClick={props.handleRemoveProfile}>
          {profile}
        </li>
      );
    });
  }
  return (
    <div className="preview">
      <div className="personalInfo">
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{github}</p>
        <p>{linkedin}</p>
      </div>
      <div className="profile">
        <h2>Profile</h2>
        {displayProfile}
        <p>{profile}</p>
      </div>
      <div className="eduction">
        <h2>Eduction</h2>
        <p>School: {school}</p>
        <p>Degree: {degree}</p>
        <p>Year of Start: {start}</p>
        <p>Year of End: {end}</p>
      </div>
    </div>
  );
};
