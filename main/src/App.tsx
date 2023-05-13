import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';

const App = ():any => {
    const [darkMode, setdarkMode] = useState(true)
    const [stockSymbol, setstockSymbol] = useState("JPM");

return (
    <ThemeContext.Provider value={[darkMode, setdarkMode]}>
        <StockContext.Provider value={[stockSymbol, setstockSymbol]}>
        <Dashboard/>
        </StockContext.Provider>
    </ThemeContext.Provider>
);
}

export default App;

