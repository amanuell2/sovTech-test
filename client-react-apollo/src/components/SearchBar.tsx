import React, { useRef } from "react";
import styled from "styled-components";
import Search from "./Svg/Search";

interface SearchBarProps {
  setSearch: (search: string) => void;
}
const SearchBar = ({ setSearch }: SearchBarProps) => {
  const inputRef = useRef(null);
  const onSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <SearchBarBox>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e)}
      />
      <button style={{ background: "transparent", border: "none" }}>
        <Search />
        {""}
      </button>
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
    > button {
      background: transparent !important;
      border: none !important;
      &:hover {
        cursor: pointer;
        background-color: #0c0909;
        padding: 5px;
      }
    }
  }
`;
