import React, { useContext, useState } from 'react'
import {XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from './SearchResults';
import ThemeContext from '../context/ThemeContext';
import {searchSymbol} from '../api/stock-api'

const Search = ():any => {
  const [darkMode] = useContext(ThemeContext)

    const [input, setInput] = useState("")
    const [bestMatches, setBestMatches]=useState([])

    const Clear = ():any =>{
        setInput("")
        setBestMatches([])
    }
    const updateBestMatches = async() =>{
    try {
      if(input){
        const searchResult = await searchSymbol(input);
        const result = await searchResult.result;
        setBestMatches(result)
      }
    } catch (error) {
      setBestMatches([]);
      console.error(error)
    }
    }
  return (
    <div className={`flex item-center my-4 border-2 rounded-md relative z-50 w-96 md:w-96
    ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-neutral-200"}
    `}>
      <input 
      type="text"
      value={input}
      className={`w-full h-2 text-sm pt-5 px-4 py-3 focus:outline-none rounded-md
      ${darkMode?"bg-gray-900":null}
      `}
      placeholder='Search Stock'
      onChange={(event) => {setInput(event.target.value)}}
      onKeyPress={(event) => {
        if (event.key === "Enter"){
            updateBestMatches();
        }
      }}
       />
       {input && (
       <button onClick={Clear} className="m-1">
        <XIcon className="h-4 w-4 fill-gray-500"/>
       </button>)}

       <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-1">
         <SearchIcon className='h-4 w-4 fill-gray-100'/>
       </button>
       { input && bestMatches.length >0 ?
       (
       <SearchResults results={bestMatches}/>
       )
       :null
       }
    </div>
  )
}

export default Search
