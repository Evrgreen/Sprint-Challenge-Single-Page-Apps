import React from "react";
import {Link} from "react-router-dom";
import Styled from "styled-components"



const StyledNav = Styled.nav`
display:flex;
width:100%;
  & ul{
    display:flex;
    justify-content:space-evenly;
    margin:0 auto;
    margin-bottom:1%;
    width:80%;
  }
  & li{
    font-size:1.3rem;
    list-style:none;
  }
  & a{
    color:salmon;
    font-weight:600;
    text-decoration:none;
    text-shadow:  -1px -1px 2px rgba(255,255,255,1), 1px 1px 3px rgba(0,0,0,.2);

    &:hover{
      color:rgba(0,0,0,.7);
    
    }
  }
`;
const StyledHeader = Styled.header`
  box-shadow: -3px -3px 6px rgba(255,255,255,1),2px 2px 6px rgba(0,0,0,.2);
  margin-top:3%;
  padding-top:.5%;
  & h1{
    
    color:salmon;
    text-shadow:  -2px -2px 3px rgba(255,255,255,1), 1px 1px 3px rgba(0,0,0,.2);
  }
`;
export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledNav>
        <ul>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/location">Locations</Link></li>
          <li><Link to="/">Home</Link></li>

          
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}
