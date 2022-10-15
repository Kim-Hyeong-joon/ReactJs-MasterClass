import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
}

function Dummy({ text }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  return (
    <Container>
      <Dummy text="Hello" />
    </Container>
  );
}

export default App;
