import React from "react";
import styled from "styled-components";

export interface CardProps {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}
const Card = ({ name, height, mass, gender, homeworld }: CardProps) => {
  return (
    <Box className="card">
      <ImgBox>
        <img
          src="http://samuel-garcia.site/img/the-force.png"
          alt="STAR-WARS-THE-FORCE"
        ></img>
      </ImgBox>
      <div className="content">
        <h2>
          {name}
          <br />
          <span>{homeworld}</span>
        </h2>
      </div>
      <DetailBox>
        <span>gender: {gender}</span>
        <span>mass:{mass}</span>
        <span>height:{height}</span>
      </DetailBox>
    </Box>
  );
};

export default React.memo(Card);

const Box = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  background: #060c21; /* Change */
  transition: 0.5s;

  &:hover {
    height: 410px;
    > div > img {
      opacity: 1;
    }
    > div:nth-child(3) {
      display: flex;
    }
    .content {
      opacity: 1;
    }
  }
  .content {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 20px;
    height: 90px;
    background: rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    transition: 0.5s;
    margin-bottom: 0.5rem;
  }
  .content h2 {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .content h2 span {
    width: 100%;
    font-size: 9px;
    font-weight: 20;
    letter-spacing: 2px;
  }
`;
const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  > img {
    max-width: 100%;
    opacity: 0.6;
    transition: 0.5s;
  }
`;
const DetailBox = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  transition: 0.5s;
  display: none;
  span {
    font-size: 12px;
    color: #fff;
    font-weight: 100;
    line-height: 10px;
    letter-spacing: 1px;
    text-transform: lowercase;
    margin-top: 0.51rem;
    margin-left: 0.6rem;
  }
`;
