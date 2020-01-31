import React from "react";
import {Link} from "react-router-dom";
import Styled from "styled-components"



const StyledNav = Styled.nav`
display:flex;
width:100%;
  & ul{
    display:flex;
    justify-content:space-evenly;
    background-color:red;
    margin:0 auto;
    width:80%;
  }
  & li{
    font-size:1.3rem;
    list-style:none;
  }
  & a{
    font-weight:600;
    text-decoration:none;
  }
`;
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledNav>
        <ul>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/location">Locations</Link></li>
          <li><Link to="/">Home</Link></li>

          
        </ul>
      </StyledNav>
    </header>
  );
}
