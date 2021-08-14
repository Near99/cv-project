import React from "react";
import styled from "styled-components";

export const Personal = ({ onSubmit, onChange, values }) => {
  const { name, phone, email, github, linkedin } = values;
  const stateObjKey = "personal";
  return (
    <Form id={stateObjKey} onSubmit={onSubmit}>
      <label>Name</label>
      <Input
        id="name"
        name={stateObjKey}
        value={name}
        onChange={onChange}
      ></Input>
      <label>Phone</label>
      <Input
        id="phone"
        name={stateObjKey}
        value={phone}
        onChange={onChange}
      ></Input>
      <label>Email</label>
      <Input
        id="email"
        name={stateObjKey}
        value={email}
        onChange={onChange}
      ></Input>
      <label>Github</label>
      <Input
        id="github"
        name={stateObjKey}
        value={github}
        onChange={onChange}
      ></Input>
      <label>Linkedin</label>
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
      <label>Profile</label>
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

const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin: auto;
  background: #acf2e5;
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
