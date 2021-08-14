import React from "react";
import styled from "styled-components";

export const CVPreview = (props) => {
  const { name, phone, email, github, linkedin } = props.values.personal;
  const { text } = props.values.profile;
  return (
    <Preview>
      {/* Side Bar */}
      <CVSidebar>
        <div>
          <h3>{name}</h3>
        </div>
        <PersonalInfoDisplay>
          <SideBarTitle>Personal Info</SideBarTitle>

          <ItemsDisplay>Phone</ItemsDisplay>
          <ItemsDisplay>{phone}</ItemsDisplay>

          <ItemsDisplay>Email</ItemsDisplay>
          <ItemsDisplay>{email}</ItemsDisplay>

          <ItemsDisplay>Github</ItemsDisplay>
          <ItemsDisplay>{github}</ItemsDisplay>

          <ItemsDisplay>Linkedin</ItemsDisplay>
          <ItemsDisplay>{linkedin}</ItemsDisplay>
        </PersonalInfoDisplay>
      </CVSidebar>
      {/* Side Bar */}

      {/* Main section  */}
      <MainSectionContainer>
        <p>{text}</p>
      </MainSectionContainer>
      {/* Main section  */}
    </Preview>
  );
};

const Preview = styled.div`
  background: white;
  display: flex;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  border-right: none;
`;

const CVSidebar = styled.div`
  border-right: 1px solid #075287;
  background: #075287;
  display: flex;
  flex-flow: column;
  align-items: left;
  color: #ffffff;
  flex-grow: 1;
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 5;
`;

const PersonalInfoDisplay = styled.div``;

const SideBarTitle = styled.h3`
  background: #043f69;
  padding-left: 5px;
  padding-top: 9px;
  height: 30px;
`;

const ItemsDisplay = styled.h6`
  margin-top: 0;
  padding-left: 5px;
`;
