import React, { useState,useEffect} from "react";
import Styled from "styled-components";



const StyledSearch = Styled.section`
grid-area:search;
`;
const StyledForm = Styled.form`
height:15vh;
display:flex;
flex-direction:column;
text-align:center;
 & label{
   
   font-size:1.5rem;
   font-weight:800;
   color:white;
 }
 & input{
   width:50%;
   border:2px solid skyblue;
   border-radius: 5px;
   box-shadow:none;
   font-size:1.5rem;
   font-weight:800;
   margin: 2% auto;
   line-height:1.3rem;
 }
`;

export default function SearchForm(props) {
  const [query,setQuery] = useState("")
  const [initialValue] = useState(props.characters)


  const changeHandler = (event => {
    event.preventDefault();
    setQuery(event.target.value)
    console.log(query);
  })
  useEffect(() =>{
      const filteredCharacters = initialValue.filter(character => {
        return character.name.toLowerCase().includes(query.toLowerCase());
      })
    props.searching(filteredCharacters);
  },[query])

  console.log(query)
  return (
    <StyledSearch className="search-form">
     <StyledForm className="searchbar">
       <label htmlFor="search">Search By Name</label>
         <input type="text" id="search" onChange={changeHandler}/>
       
     </StyledForm>
    </StyledSearch>
  );
}

