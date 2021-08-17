import React from "react";
import { Personal, Profile, Eduction, Skill, Career } from "./InputField";
import styled from "styled-components";
import { CVPreview } from "./CVPreview";

export default class Main extends React.Component {
  state = {
    personal: {
      name: "John Doe",
      phone: "+65-1234567",
      email: "johndoe@gmail.com",
      github: "github.com/johndoe",
      linkedin: "linkedin.com/john",
      visiable: true,
    },
    profile: {
      text: "Sed nec ultrices odio, vitae tempor dolor. Curabitur quis lorem a leo dignissim mollis quis sed justo. Nullam volutpat vel purus in rhoncus. In congue faucibus eros, sed mattis quam aliquam vitae. Curabitur placerat orci id nisl vestibulum tempus. Morbi luctus, sem ac pulvinar porttitor, tortor libero dapibus eros, vitae lacinia tellus risus vel justo. Nunc vitae molestie ante. Praesent in laoreet urna, id molestie neque. Nam vitae ipsum vel neque pretium ultricies. Mauris nulla eros, aliquet non lorem a, congue placerat metus.",
      visiable: false,
    },
    eduction: {
      school: "University of London",
      degree: "Master Degree",
      major: "Computer Science",
      start: "2017",
      end: "2020",
      visiable: false,
      eductions: [],
    },
    career: {
      company: "Google",
      position: "Frontend Developer",
      detail:
        "Etiam ultricies id risus ut condimentum. Nam ac arcu porttitor, varius magna eget, porta ipsum. Integer consectetur diam sit amet nibh efficitur volutpat. Fusce ac arcu urna. Quisque efficitur egestas quam quis placerat. Donec nulla ex, iaculis at felis in, fringilla consectetur tortor. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus egestas sagittis tortor a pulvinar. Donec convallis augue nec ullamcorper luctus.",
      careerStart: "2015",
      careerEnd: "2017",
      visiable: false,
      careers: [
        {
          company: "Facebook",
          position: "Frontend Developer",
          careerStart: "2017",
          careerEnd: "2021",
          detail:
            "Etiam ultricies id risus ut condimentum. Nam ac arcu porttitor, varius magna eget, porta ipsum. Integer consectetur diam sit amet nibh efficitur volutpat. Fusce ac arcu urna. Quisque efficitur egestas quam quis placerat. Donec nulla ex, iaculis at felis in, fringilla consectetur tortor. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus egestas sagittis tortor a pulvinar. Donec convallis augue nec ullamcorper luctus.",
        },
      ],
    },
    skill: {
      skillText: "",
      visiable: false,
      skills: ["JavaScript", "HTML5", "CSS3", "React", "SQL"],
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
      },
      visiable: true,
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
`;

const EditButton = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height: 50px;
`;

const InputFeildContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
`;
