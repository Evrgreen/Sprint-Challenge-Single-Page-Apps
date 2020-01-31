import React, { useState,useEffect} from "react";

export default function SearchForm(props) {
  const [query,setQuery] = useState("")
  // console.log(props)r

  const changeHandler = (event => {
    event.preventDefault();
    setQuery(event.target.value)
    console.log(query);
  })
  useEffect(() =>{
     console.log("running",props.characters)
      const filteredCharacters = props.characters.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    console.log(filteredCharacters)
    props.searching(filteredCharacters);
  },[query])

  console.log(query)
  return (
    <section className="search-form">
     <form className="searchbar">
       <label htmlFor="search">
         <input type="text" id="search" onChange={changeHandler}/>
       </label>
     </form>
    </section>
  );
}

