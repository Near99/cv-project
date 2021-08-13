import React from "react";
import { Personal, Profile } from "./InputField";
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
      personals: [],
      visiable: false,
    },
    profile: { text: "", profiles: [], visiable: false },
    eduction: {
      school: "",
      degree: "",
      marjor: "",
      start: "",
      end: "",
      eductions: [],
      visiable: true,
    },
    career: {
      company: "",
      position: "",
      detail: "",
      isFullTime: "",
      start: "",
      end: "",
      careers: [],
      visiable: false,
    },
    skill: {
      text: "",
      skills: [],
      visiable: false,
    },
  };

  handleChange = (event) => {
    const { id, name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState.personal,
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

    return (
      <Wrapper>
        {this.state.personal.visiable ? personal : editPersonal}
        {this.state.profile.visiable ? profile : editProfile}
        <CVPreview />
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
