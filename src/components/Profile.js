import React from "react";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: false,
    };
  }

  handleHiddenInput = (event) => {
    const target = event.target.previousSibling;
    if (this.state.isVisiable) {
      target.classList.add("after-submit");
      this.setState({
        isVisiable: !this.state.isVisiable,
      });
    } else {
      target.classList.remove("after-submit");
      this.setState({
        isVisiable: !this.state.isVisiable,
      });
    }
  };

  render() {
    return (
      <div className="profile-input-field ">
        <form
          className="profile-info-input after-submit"
          onSubmit={this.props.handleSubmit}
        >
          <label htmlFor="addProfile"></label>
          <input
            value={this.props.inputs}
            name="addProfile"
            onChange={this.props.handleChange}
          />
          <button type="submit">Add Profile</button>
        </form>
        <button onClick={this.handleHiddenInput} type="button">
          {this.state.isVisiable ? "Finish" : "Edit Profile"}
        </button>
      </div>
    );
  }
}
