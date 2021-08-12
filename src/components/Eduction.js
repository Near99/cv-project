import React from "react";
import "./Eduction.css";

export default class Eduction extends React.Component {
  state = { isVisiable: true };

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
    const { school, degree, start, end } = this.props;
    const editPersonalInfo = (
      <div>
        <button onClick={this.toogleBack}>Edit Eduction Info</button>
      </div>
    );
    const inputField = (
      <div>
        <form className="eduction-input-feild" onSubmit={this.handleSubmit}>
          <label htmlFor="school">Schoole</label>
          <input
            value={school}
            name="school"
            onChange={this.props.handleChange}
          />
          <label htmlFor="degree">Degree</label>
          <input
            value={degree}
            name="degree"
            onChange={this.props.handleChange}
          />
          <label htmlFor="start">Year of Start</label>
          <input
            value={start}
            name="start"
            onChange={this.props.handleChange}
          />
          <label htmlFor="end">Year of End</label>
          <input value={end} name="end" onChange={this.props.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
    return this.state.isVisiable ? editPersonalInfo : inputField;
  }
}
