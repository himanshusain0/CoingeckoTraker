import { useState } from "react"
import { CurrencyContext } from "./components/context/CurrencyContext";
import Home from "./components/pages/Home";
function App(){
  const [currency,setCurrency]=useState('usd');
  return(
    <>
    <CurrencyContext.Provider value={{currency,setCurrency}} >
      <Home/>
    </CurrencyContext.Provider>
    </>
  )
}
export default App