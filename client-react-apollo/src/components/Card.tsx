import React from "react";
import styled from "styled-components";
const Card = () => {
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
          STAR WARS
          <br />
          <span>the force awakens</span>
        </h2>
      </div>
    </Box>
  );
};

export default Card;

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
    height: 400px;
    > div > img {
      opacity: 1;
    }
    .content {
      opacity: 1;
    }
  }
  .content {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 90px;
    background: rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    transition: 0.5s;
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
    font-size: 14px;
    font-weight: 200;

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
    opacity: 0.3;
    transition: 0.5s;
  }
`;
