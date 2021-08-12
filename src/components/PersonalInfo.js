import React from "react";
import "./PersonalInfo.css";

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    target.classList.add("after-submit");
    this.setState({
      isVisiable: !this.state.isVisiable,
    });
  };

  toogleBack = () => {
    this.setState({
      isVisiable: !this.state.isVisiable,
    });
  };

  render() {
    const { handleChange, inputs } = this.props;
    const editPersonalInfo = (
      <div>
        <button onClick={this.toogleBack}>Edit Personal Info</button>
      </div>
    );
    const inputField = (
      <div className="input-field">
        <form className="personal-info-input" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input name="name" value={inputs.name} onChange={handleChange} />
          <label htmlFor="phone">Phone</label>
          <input name="phone" value={inputs.phone} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input name="email" value={inputs.email} onChange={handleChange} />
          <label htmlFor="github">Github</label>
          <input name="github" value={inputs.github} onChange={handleChange} />
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            name="linkedin"
            value={inputs.linkedin}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
    return this.state.isVisiable ? editPersonalInfo : inputField;
  }
}
