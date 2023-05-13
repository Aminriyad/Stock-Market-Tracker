import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import StockContext from '../context/StockContext'

const SearchResults = ({results}:any):any => {
  const [darkMode] = useContext(ThemeContext)
  const [stockSymbol,setstockSymbol] = useContext(StockContext)//always import both, event when you're not using them
  return (
<ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll
${
  darkMode?
  "bg-gray-900 border-gray-800 custom-scrollbar-dark"
  :
  "bg-white border-neutral-200"}
`}>
{results.map((item : any)=>{
    return  (
    <li
    key={item.symbol}
    className={`text-sm cursor-pointer p-4 m-2 flex item-center justify-between rounded-md
    ${darkMode?
      "hover:bg-indigo-600"
      :
      "hover:bg-indigo-200"}`}
      onClick={()=>{
        setstockSymbol(item.symbol);
      }}
    >
        <span>{item.symbol}</span>
        <span>{item.description}</span>
    </li>
)})}
</ul>
  )
}

export default SearchResults
