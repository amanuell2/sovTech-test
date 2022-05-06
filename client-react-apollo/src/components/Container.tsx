import React from "react";
import styled from "styled-components";
import Card, { CardProps } from "./Card";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const Container = () => {
  const { data } = useQuery(FEED_QUERY);
  return (
    <StyledContainer>
      {data && (
        <>
          {data.feed.map((people: CardProps) => (
            <Card {...{ ...people }} />
          ))}
        </>
      )}
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
