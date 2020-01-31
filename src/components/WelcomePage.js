import React from "react";
import Styled from "styled-components";

const StyledHome = Styled.section`
  color: RGB(244, 131, 116);
  text-align:center;
  & img{
    border:1px solid rgba(0,0,0,.2);
  box-shadow: -4px -4px 6px rgba(255,255,255,1),3px 3px 6px rgba(0,0,0,.1);
    
    width:20%;
  }
`;

export default function WelcomePage() {
  return (
    <StyledHome className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </StyledHome>
  );
}
