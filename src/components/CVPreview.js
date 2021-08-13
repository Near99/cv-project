import React from "react";
import styled from "styled-components";

export const CVPreview = (props) => {
  const { name, phone, email, github, linkedin } = props.values.personal;
  const { text } = props.values.profile;
  return (
    <Preview>
      <div>
        <h2>Personal</h2>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{github}</p>
        <p>{linkedin}</p>
      </div>
      <div>
        <h2>Profile</h2>
        <p>{text}</p>
      </div>
    </Preview>
  );
};

const Preview = styled.div`
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
`;
