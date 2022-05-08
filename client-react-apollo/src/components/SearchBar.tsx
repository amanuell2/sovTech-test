import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    //    search bar with button
    <SearchBarBox>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </SearchBarBox>
  );
};

export default SearchBar;

const SearchBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100px;
  background: #060c21;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  > input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    &::placeholder {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
    & > button {
      background: transparent;
      border: none;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0;
      margin: 0;
      &:hover {
        cursor: pointer;
        background-color: #0c0909;
        padding: 5px;
      }
    }
  }
`;
