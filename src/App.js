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
  width: 100%;
  height: 100%;
`;
