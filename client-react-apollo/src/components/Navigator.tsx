import React from "react";
import styled from "styled-components";
import LeftArrow from "./Svg/LeftArrow";
import RightArrow from "./Svg/RightArrow";

export interface NavigatorProps {
  onLeftClick: () => any;
  onRightClick: () => any;
  isLoading: boolean;
}

const Navigator = ({
  onLeftClick,
  onRightClick,
  isLoading,
}: NavigatorProps) => {
  return (
    <NavigatorContainer>
      <button type="button" onClick={onLeftClick}>
        <LeftArrow />
        {""}
      </button>
      {isLoading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <button type="button" onClick={onRightClick}>
        <RightArrow />
        {""}
      </button>
    </NavigatorContainer>
  );
};

export default Navigator;

const NavigatorContainer = styled.div`
  position: relative;
  width: 100vw !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  padding-left: 2rem;
  padding-right: 2rem;
  & > button {
    background: transparent;
    border: none;
  }
  & > button:hover {
    cursor: pointer;
    background-color: #0c0909;
  }
`;
