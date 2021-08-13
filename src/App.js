import React from "react";
import styled from "styled-components";
import Main from "./components/Main";

const App = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background: #cfcfcf;
  width: 100%;
  height: 100%;
`;
