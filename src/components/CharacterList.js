import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dummyData from "./Data"
import SearchForm from "./SearchForm"





const StyledWrapper = styled.section`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-gap:30px;
  grid-template-areas:
  "search search search search"
  
`;
const StyledCard = styled.div`
  box-shadow: -3px -3px 6px rgba(255,255,255,1),2px 2px 6px rgba(0,0,0,.2);
  color:rgba(200,100,113,.7);
  margin:10% 0;
  font-size:.8rem;
  padding:0 1%;
  text-align:center;
`;

export default function CharacterList() {
  const [characters,setCharacters] = useState([]);

  console.log(characters)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      console.log(response.data);
      setCharacters(response.data.results)
    })
    .catch(error =>{
      console.log(error)
    })
  }, []);
  const searching = (props) =>{
    setCharacters(props);
  }

  return (
    <StyledWrapper className="character-list">
      <SearchForm searching={searching} characters={characters}/>
      {characters.map(character =>{
        return(
        <StyledCard className="character__card">
          <h2>{character.name}</h2>
        </StyledCard>
        )
      })}
    </StyledWrapper>
  );
}
