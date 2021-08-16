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
  const { school, degree, major, start, end } = props.values.eduction;
  const { text } = props.values.profile;
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
            <PersonalInfoList>
              <EductionPeriod>
                {start} - {end}
              </EductionPeriod>
              <MajorName>
                {degree} in {major}
              </MajorName>
              <SchoolName>{school}</SchoolName>
            </PersonalInfoList>
            <PersonalInfoList>
              <EductionPeriod>2017 - 2020</EductionPeriod>
              <MajorName>Bachelor Degree in Computer Science</MajorName>
              <SchoolName>University of Cambridge</SchoolName>
            </PersonalInfoList>
          </PersonalInfoUl>
        </LeftSideSection>

        <LeftSideSection>
          <LeftSideBarTitle>Language</LeftSideBarTitle>
          <PersonalInfoUl>
            <PersonalInfoList>
              <EductionPeriod>
                {start} - {end}
              </EductionPeriod>
              <MajorName>
                {degree} in {major}
              </MajorName>
              <SchoolName>{school}</SchoolName>
            </PersonalInfoList>

            <PersonalInfoList>
              <EductionPeriod>2017 - 2020</EductionPeriod>
              <MajorName>Bachlor Degree in Computer Science</MajorName>
              <SchoolName>University of London</SchoolName>
            </PersonalInfoList>
          </PersonalInfoUl>
        </LeftSideSection>
      </LeftSide>
      <RightSide>
        <div>
          <h2 style={{ color: "#003147" }}>PROFILE</h2>
          <p style={{ color: "#333" }}>{text}</p>
        </div>
      </RightSide>
    </Preview>
  );
};

const Preview = styled.div`
  background: white;
  display: grid;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  grid-template-columns: 1fr 2fr;
`;

const LeftSide = styled.div`
  /* background: #004f73; */
  background: #003147;
  padding: 40px;
  color: #ffffff;
`;

const RightSide = styled.div`
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

const ExperienceSection = styled.div`
  display: flex;
  flex-flow: row;
`;
