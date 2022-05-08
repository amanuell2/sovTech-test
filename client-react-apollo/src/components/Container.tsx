import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card, { CardProps } from "./Card";
import { gql, useLazyQuery } from "@apollo/client";
import Navigator from "./Navigator";
import SearchBar from "./SearchBar";

const FEED_QUERY = gql`
  query GetFeedList($page: Int!) {
    feed(page: $page) {
      name
      mass
      height
      gender
      homeworld
    }
  }
`;

const Container = () => {
  const [page, setPage] = useState(1);

  const [executePagination, { data, loading }] = useLazyQuery(FEED_QUERY, {});

  useEffect(() => {
    console.log("hello world", page);
    executePagination({
      variables: { page },
    });
  }, [page]);

  return (
    <StyledContainer>
      <SearchBar />
      <Navigator
        onLeftClick={() => setPage(page - 1)}
        onRightClick={() => setPage(page + 1)}
        isLoading={loading}
      />
      {data && (
        <div>
          {data.feed.map((people: CardProps) => (
            <Card {...{ ...people }} />
          ))}
        </div>
      )}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: #060c21;
  z-index: -5;
  overflow-x: hidden;
  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;
