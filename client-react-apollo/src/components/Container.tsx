import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = () => {
  return (
    <StyledContainer>
      {/* render dummy cards */}

      {[1, 2, 4, 5, 6, 7, 8].map((item) => (
        <Card />
      ))}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #060c21;
  z-index: -5;
`;
