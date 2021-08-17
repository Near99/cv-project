import React from "react";
import { Personal, Profile, Eduction, Skill, Career } from "./InputField";
import styled from "styled-components";
import { CVPreview } from "./CVPreview";

export default class Main extends React.Component {
  state = {
    personal: {
      name: "",
      phone: "",
      email: "",
      github: "",
      linkedin: "",
      visiable: false,
    },
    profile: {
      text: "",
      visiable: false,
    },
    eduction: {
      school: "",
      degree: "",
      major: "",
      start: "",
      end: "",
      visiable: false,
      eductions: [],
    },
    career: {
      company: "",
      position: "",
      detail: "",
      careerStart: "",
      careerEnd: "",
      visiable: false,
      careers: [],
    },
    skill: {
      skillText: "",
      visiable: false,
      skills: [],
    },
  };

  handleChange = (event) => {
    const { id, name, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [id]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const isVisiable = this.state[id].visiable;

    this.setState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        visiable: !isVisiable,
      },
    }));
  };

  handleEditing = (event) => {
    const name = event.target.name;
    const isVisiable = this.state[name].visiable;

    this.setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        visiable: !isVisiable,
      },
    }));
  };

  handleAddSkill = (event) => {
    event.preventDefault();
    this.setState({
      skill: {
        skills: [...this.state.skill.skills, this.state.skill.skillText],
        skillText: "",
        // visiable will be set to false if doesn't handle it.
        visiable: true,
      },
    });
  };

  handleAddEduction = (event) => {
    event.preventDefault();
    const { school, degree, major, start, end } = this.state.eduction;
    this.setState({
      eduction: {
        eductions: [
          ...this.state.eduction.eductions,
          { school, degree, major, start, end },
        ],
        school: "",
        degree: "",
        major: "",
        start: "",
        end: "",
        // visiable will be set to false if doesn't handle it.
        visiable: true,
      },
    });
  };

  handleRemoveSKill = (event) => {
    const shiftKeyDown = event.shiftKey;
    const index = Number(event.target.id);
    if (shiftKeyDown) {
      this.setState({
        skill: {
          skills: [
            ...this.state.skill.skills.slice(0, index),
            ...this.state.skill.skills.slice(index + 1),
          ],
        },
      });
    }
  };

  handleAddExperience = (event) => {
    event.preventDefault();
    const { company, position, detail, careerStart, careerEnd, careers } =
      this.state.career;
    this.setState({
      career: {
        careers: [
          ...careers,
          { company, position, detail, careerStart, careerEnd },
        ],
        company: "",
        position: "",
        detail: "",
        careerStart: "",
        careerEnd: "",
        visiable: true,
      },
    });
  };

  handleRemoveExperience = () => {
    this.setState({
      career: { careers: [] },
    });
  };

  handleRemoveEduction = () => {
    this.setState({
      eduction: { eductions: [] },
    });
  };

  render() {
    const editPersonal = (
      <EditButton name="personal" onClick={this.handleEditing}>
        Edit Personal Info
      </EditButton>
    );

    const personal = (
      <Personal
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        values={this.state.personal}
      />
    );

    const editProfile = (
      <EditButton name="profile" onClick={this.handleEditing}>
        Edit Profile
      </EditButton>
    );

    const profile = (
      <Profile
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        values={this.state.profile}
      />
    );

    const editEduction = (
      <EditButton name="eduction" onClick={this.handleEditing}>
        Edit Eduction
      </EditButton>
    );

    const eduction = (
      <Eduction
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        values={this.state.eduction}
        addEduction={this.handleAddEduction}
        removeEduction={this.handleRemoveEduction}
      />
    );

    const editSkill = (
      <EditButton name="skill" onClick={this.handleEditing}>
        Edit Skill
      </EditButton>
    );

    const skill = (
      <Skill
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        addSkill={this.handleAddSkill}
        values={this.state.skill}
      />
    );

    const editCareer = (
      <EditButton name="career" onClick={this.handleEditing}>
        Edit Career
      </EditButton>
    );

    const career = (
      <Career
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        addCareer={this.handleAddExperience}
        removeCareer={this.handleRemoveExperience}
        values={this.state.career}
      />
    );

    return (
      <Wrapper>
        <InputFeildContainer>
          {this.state.personal.visiable ? personal : editPersonal}
          {this.state.profile.visiable ? profile : editProfile}
          {this.state.eduction.visiable ? eduction : editEduction}
          {this.state.skill.visiable ? skill : editSkill}
          {this.state.career.visiable ? career : editCareer}
        </InputFeildContainer>
        <CVPreview values={this.state} removeSkill={this.handleRemoveSKill} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: #000000;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #008223;
  border-radius: 3px;
  height: 50px;
`;

const InputFeildContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  margin-right: 0;
`;
