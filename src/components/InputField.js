import React from "react";
import styled from "styled-components";

export const Personal = ({ onSubmit, onChange, values }) => {
  const { name, phone, email, github, linkedin } = values;
  const stateObjKey = "personal";
  return (
    <Form id={stateObjKey} onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input
        id="name"
        name={stateObjKey}
        value={name}
        onChange={onChange}
      ></Input>
      <Label>Phone</Label>
      <Input
        id="phone"
        name={stateObjKey}
        value={phone}
        onChange={onChange}
      ></Input>
      <Label>Email</Label>
      <Input
        id="email"
        name={stateObjKey}
        value={email}
        onChange={onChange}
      ></Input>
      <Label>Github</Label>
      <Input
        id="github"
        name={stateObjKey}
        value={github}
        onChange={onChange}
      ></Input>
      <Label>Linkedin</Label>
      <Input
        id="linkedin"
        name={stateObjKey}
        value={linkedin}
        onChange={onChange}
      ></Input>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const Profile = ({ onSubmit, onChange, values }) => {
  const { text } = values;
  const stateObjKey = "profile";
  return (
    <Form id={stateObjKey} onSubmit={onSubmit}>
      <Label>Profile</Label>
      <TextArea
        id="text"
        name={stateObjKey}
        value={text}
        onChange={onChange}
      ></TextArea>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const Eduction = ({ onSubmit, onChange, values }) => {
  const { school, degree, major, start, end } = values;
  const stateObjKey = "eduction";
  return (
    <Form id={stateObjKey} onSubmit={onSubmit}>
      <Label>School</Label>
      <Input
        id="school"
        name={stateObjKey}
        value={school}
        onChange={onChange}
      ></Input>
      <Label>Phone</Label>
      <Input
        id="degree"
        name={stateObjKey}
        value={degree}
        onChange={onChange}
      ></Input>
      <Label>Major</Label>
      <Input
        id="major"
        name={stateObjKey}
        value={major}
        onChange={onChange}
      ></Input>
      <Label>Year of Start</Label>
      <Input
        id="start"
        name={stateObjKey}
        value={start}
        onChange={onChange}
      ></Input>
      <Label>Year of End</Label>
      <Input
        id="end"
        name={stateObjKey}
        value={end}
        onChange={onChange}
      ></Input>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin: auto;
  /* background: #acf2e5; */
  background: #146582;
  width: 600px;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  font-family: "Cinzel", serif;
  box-shadow: 0px 6px 10px rgba(255, 255, 255, 0.25);
`;

const Input = styled.input`
  height: 50px;
  padding-left: 5px;
  margin: 15px 0 15px 0;
  font-size: larger;
  border: none;
  border-radius: 5px;
`;

const Label = styled.label`
  color: #ffffff;
`;

const Button = styled.button`
  width: auto;
  height: 50px;
  margin-top: 10px;
  font-family: "Cinzel", serif;
  font-weight: bolder;
`;

const TextArea = styled.textarea`
  height: 100px;
  padding-left: 5px;
  margin: 15px 0 15px 0;
  font-size: larger;
  border: none;
  border-radius: 5px;
`;
