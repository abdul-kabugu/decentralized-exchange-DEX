
import { createContext, useState } from "react";

  export const useExchangeDetails = createContext();

const ExchangeStateProvider = (props) => {
    const [fromToken, setfromToken] = useState({})
    const [toToken, settoToken] = useState({})

     
    return(
         <useExchangeDetails.Provider 
           value={{tokenOne : [fromToken, setfromToken, toToken, settoToken], 
            tokenTwo : [toToken, settoToken]
           }}>
             
         
            {props.children}
         </useExchangeDetails.Provider>
    )
}


export default ExchangeStateProvider;