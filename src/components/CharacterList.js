import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dummyData from "./Data"
import SearchForm from "./SearchForm"





const StyledWrapper = styled.section`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-areas:
  "... search search ..."
  "card card card card"
`;

export default function CharacterList() {
  const [characters,setCharacters] = useState(dummyData.data);


  // useEffect(() => {
  //   axios.get(`https://rickandmortyapi.com/api/character/`)
  //   .then(response =>{
  //     console.log(response);
  //   })
  //   .catch(error =>{
  //     console.log(error)
  //   })
  // }, []);
  const searching = (props) =>{
    setCharacters(props);
  }

  return (
    <StyledWrapper className="character-list">
      <SearchForm searching={searching} characters={characters}/>
      {characters.map(character =>{
        return(
        <div className="character__card">
          <h2>{character.name}</h2>
        </div>
        )
      })}
    </StyledWrapper>
  );
}
