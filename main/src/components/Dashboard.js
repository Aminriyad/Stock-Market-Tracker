import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { mockCompanyDetails } from '../constants/mocks'
import Search from './Search'
import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import Chart from './Chart'
import ThemeContext from '../context/ThemeContext'
import StockContext from '../context/StockContext'
import { fetchQuote, fetchStockDetails } from '../api/stock-api'



const Dashboard = () => {
  const [darkMode] =useContext(ThemeContext)
  const [stockSymbol] = useContext(StockContext)

  const [stockDetails, setStockDetails]= useState({})
  const [qoute, setQoute]=useState({})
  
  useEffect(()=>{
    const updateStockDetails = async ()=>{
      try {
        const result = await fetchStockDetails(stockSymbol)
        setStockDetails(result)
      } catch (error) {
        setStockDetails([])
        console.error(error)
      }
    }
    const updateStockOverview = async ()=>{
      try {
        const result = await fetchQuote(stockSymbol)
        setQoute(result)
      } catch (error) {
        setQoute({})
        console.error(error)
      }
    }

    updateStockDetails();
    updateStockOverview();

  },[stockSymbol])
  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-17 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand
    ${darkMode ? "bg-gray-900 text-gray-300"
    :
    " bg-neutral-100 "
    }`}>
      <div className="col-span-1 md:col-span-2 xl:col-span-3  row-span-1">
        <h1 className="text-5xl">
            <Header name={stockDetails.name}/>
        </h1>
      </div>
      <div className='md:col-span-2 row-span-4'>
        <Chart/>
      </div>
      <div >
            <Overview
            symbol={stockSymbol}
            price={qoute.pc}
            change={qoute.d}
            changePercent={qoute.dp}
            currency={stockDetails.currency} />
      </div>
      <div className='row-span-2 xl:row-span-3 h-fit xl:h-full'>
            <Details details={stockDetails}/>
      </div>
    </div>
  )
}

export default Dashboard
