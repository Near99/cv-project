import React from "react";
import styled from "styled-components";
import mypic from "./profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export const CVPreview = (props) => {
  const { name, phone, email, github, linkedin } = props.values.personal;
  const { school, degree, major, start, end, eductions } =
    props.values.eduction;
  const { text } = props.values.profile;
  const { skillText, skills } = props.values.skill;
  const { company, position, detail, careerStart, careerEnd, careers } =
    props.values.career;
  const phoneIcon = <FontAwesomeIcon color="#03a9f4" icon={faPhoneAlt} />;
  const linkedinIcon = <FontAwesomeIcon color="#03a9f4" icon={faLinkedinIn} />;
  const githubIcon = <FontAwesomeIcon color="#03a9f4" icon={faGithubSquare} />;
  const emailIcon = (
    <FontAwesomeIcon color="#03a9f4" icon={faEnvelope} size="sm" />
  );
  const profilePic = (
    <img
      style={{ borderRadius: "50%" }}
      width="150"
      height="150"
      src={mypic}
      alt="profilepic"
    ></img>
  );
  const displaySkill = skills.map((skill, index) => {
    return (
      <PersonalInfoList onClick={props.removeSkill} id={index} key={index}>
        {skill}
      </PersonalInfoList>
    );
  });
  const displayCareer = careers.map((career, index) => {
    return (
      <ExperienceWapper key={index}>
        <ExperiencePeriod>
          {career.careerStart} - {career.careerEnd}
        </ExperiencePeriod>
        <ExperienceDetail>
          <h3>{career.company}</h3>
          <h3>{career.position}</h3>
          <p>{career.detail}</p>
        </ExperienceDetail>
      </ExperienceWapper>
    );
  });
  const displayEduction = eductions.map((eduction, index) => {
    return (
      <PersonalInfoList key={index}>
        <EductionPeriod>
          {eduction.start} - {eduction.end}
        </EductionPeriod>
        <MajorName>
          {eduction.degree} in {eduction.major}
        </MajorName>
        <SchoolName>{eduction.school}</SchoolName>
      </PersonalInfoList>
    );
  });

  return (
    <Preview>
      <LeftSide>
        <ProfilePicSection>
          <ProfilePicBox>{profilePic}</ProfilePicBox>
          <h3>{name}</h3>
        </ProfilePicSection>
        <LeftSideSection>
          <LeftSideBarTitle>Contact Info</LeftSideBarTitle>

          <PersonalInfoUl>
            <PersonalInfoList>
              <IconSpan>{phoneIcon}</IconSpan>
              {phone}
            </PersonalInfoList>
            <PersonalInfoList>
              <IconSpan>{emailIcon}</IconSpan>
              {email}
            </PersonalInfoList>
            <PersonalInfoList>
              <IconSpan>{githubIcon}</IconSpan>
              {github}
            </PersonalInfoList>
            <PersonalInfoList>
              <IconSpan>{linkedinIcon}</IconSpan>
              {linkedin}
            </PersonalInfoList>
          </PersonalInfoUl>
        </LeftSideSection>

        <LeftSideSection>
          <LeftSideBarTitle>Eduction</LeftSideBarTitle>
          <PersonalInfoUl>
            {displayEduction}
            <PersonalInfoList>
              <EductionPeriod>
                {start} {end}
              </EductionPeriod>
              <MajorName>
                {degree} {major}
              </MajorName>
              <SchoolName>{school}</SchoolName>
            </PersonalInfoList>
          </PersonalInfoUl>
        </LeftSideSection>

        <LeftSideSection>
          <LeftSideBarTitle>Skill</LeftSideBarTitle>
          <PersonalInfoUl>
            {displaySkill}
            {skillText}
          </PersonalInfoUl>
        </LeftSideSection>
      </LeftSide>
      <RightSide>
        <div>
          <h2 style={{ color: "#003147" }}>PROFILE</h2>
          <p style={{ color: "#333" }}>{text}</p>
        </div>

        <div style={{ paddingTop: "20px" }}>
          <h2 style={{ color: "#003147" }}>EXPERIENCE</h2>
          {displayCareer}
          <ExperienceWapper>
            <ExperiencePeriod>
              {careerStart} {careerEnd}
            </ExperiencePeriod>
            <ExperienceDetail>
              <h3>{company}</h3>
              <h3>{position}</h3>
              <p>{detail}</p>
            </ExperienceDetail>
          </ExperienceWapper>
        </div>
      </RightSide>
    </Preview>
  );
};

const Preview = styled.div`
  background: white;
  display: grid;
  margin: auto;
  margin-left: 50px;
  /* margin-bottom: 0.5cm; */
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  grid-template-columns: 1fr 2fr;
`;

const LeftSide = styled.div`
  position: relative;
  /* background: #004f73; */
  background: #003147;
  padding: 40px;
  color: #ffffff;
`;

const RightSide = styled.div`
  position: relative;
  padding: 40px;
`;

const ProfilePicSection = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LeftSideSection = styled.div`
  position: relative;
  margin: 35px 0 35px 0;
`;

const LeftSideBarTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PersonalInfoUl = styled.ul`
  padding-left: 0;
`;

const PersonalInfoList = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const IconSpan = styled.span`
  padding-right: 10px;
`;

const ProfilePicBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const EductionPeriod = styled.h5`
  margin: 0 0 15px 0;
  color: #03a9f4;
  /* font-weight: 500; */
`;

const SchoolName = styled.h4`
  margin: 0 0 15px 0;
  /* font-weight: 500; */
`;

const MajorName = styled.h4`
  margin: 0 0 15px 0;
  font-weight: 500;
`;

const ExperiencePeriod = styled.div`
  width: auto;
  height: 50px;
  font-family: "Cinzel", serif;
  /* font-weight: bolder; */
  text-align: center;
  background: #ffffff;
  /* align text to the center vertically */
  line-height: 50px;
  margin-top: 5px;
`;

const ExperienceDetail = styled.div`
  margin-left: 50px;
`;

const ExperienceWapper = styled.div`
  display: flex;
  flex-flow: row;
`;
