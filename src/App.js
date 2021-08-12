import React from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Eduction from "./components/Eduction";
import { Preview } from "./components/Preview";
import { Profile } from "./components/Profile";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // personal information
      name: "",
      phone: "",
      email: "",
      github: "",
      linkedin: "",
      fullPersonalInfo: [],
      // profile
      profile: "",
      fullProfileInfo: [],
      // eduction
      school: "",
      degree: "",
      start: "",
      end: "",
    };
  }

  // Personal Info Input
  handlePersonalInfoInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleProfileInputChange = (event) => {
    this.setState({
      profile: event.target.value,
    });
  };

  // Profile Input
  handleAddProfile = (event) => {
    event.preventDefault();
    this.setState({
      fullProfileInfo: [...this.state.fullProfileInfo, this.state.profile],
      profile: "",
    });
  };

  handleRemoveProfile = (event) => {
    const index = Number(event.target.id);

    this.setState({
      fullProfileInfo: [
        ...this.state.fullProfileInfo.slice(0, index),
        ...this.state.fullProfileInfo.slice(index + 1),
      ],
    });
  };

  // Eduction
  handleEductionInput = (event) => {};

  // Final Submit
  finalSubmit = () => {
    const { name, phone, email, github, linkedin } = this.state;
    this.setState({
      fullPersonalInfo: [name, phone, email, github, linkedin],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="input-feild-container">
          <div className="app-personalInfo-container">
            <PersonalInfo
              handleChange={this.handlePersonalInfoInputChange}
              inputs={this.state}
            />
          </div>
          <div className="app-eduction-container">
            <Eduction
              handleChange={this.handlePersonalInfoInputChange}
              inputs={this.state}
            />
          </div>
          <div className="app-profile-container">
            <Profile
              handleSubmit={this.handleAddProfile}
              inputs={this.state.profile}
              handleChange={this.handleProfileInputChange}
            />
          </div>
          <div className="app-finish-container">
            <button onClick={this.finalSubmit}>Complete</button>
          </div>
        </div>
        <div className="preview-container">
          <Preview
            inputs={this.state}
            handleRemoveProfile={this.handleRemoveProfile}
          />
        </div>
      </div>
    );
  }
}
