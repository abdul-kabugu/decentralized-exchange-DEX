import { AppContainer, ArrowContainer, ExchangeRateContainer, FirstOption, MinTokenLogo, ModalContainer, SelectContainer, SelectedTokenCard, SelectTokenBtn, SwapBox, SwapBoxHeader, SwapBtn, SwapContainer, TokenAmountInput } from "./components/App.style";
import {SettingOutlined, ArrowDownOutlined, DownOutlined} from "@ant-design/icons"
import Navbar from "./components/Navbar";
import { useMoralis, useOneInchQuote } from "react-moralis";
import { useState } from "react";
import { useOneInchTokens, useOneInchSwap} from "react-moralis";
import Modal from "./components/Modal";
import { useContext } from "react";
import { useExchangeDetails } from "./components/ExchangeState";

import QuoteModal from "./components/QuoteModel";
function App() {
  const [quoteToken, setquoteToken] = useState("")
  const [baseToken, setbaseToken] = useState("")
  const [isVisible, setisVisible] = useState(false)
  const [isModalTwoVisible, setIsModalTwoVisible] = useState(false)
 const {account, authenticate, isAuthenticated, isAuthenticating}  = useMoralis()
  const {tokenOne, tokenTwo} = useContext(useExchangeDetails)
       const [fromToken, setFromToken] = tokenOne;
       const [toToken, settoToken] = tokenTwo
 const  showModal = ()  => {
        setisVisible(true)
    }
const showModalTwo = () => {
      setIsModalTwoVisible(true)
    }

      const fromAddress = fromToken.address;
       const toAddrress = toToken.address;
      
       

    /*const swapOptions = {
      chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: {fromAddress}, // The token you want to swap
      toTokenAddress:  {toAddrress}, // The token you want to receive
      amount: 1000,
      fromAddress: {account}, // Your wallet address
      slippage: 1,
      
      autoFetch: false ,
    }

     const swapCoin = ()  =>  {

     }*/
    
  return (
    <AppContainer>
      <Navbar />
           {isModalTwoVisible && <QuoteModal visibility = {setIsModalTwoVisible}/> }
          {isVisible  && <Modal  isVisible ={setisVisible}/>}
          
      <SwapContainer>
        <SwapBox>
         <SwapBoxHeader> <FirstOption>swap</FirstOption> <SettingOutlined style={{fontSize : "20px", cursor: "pointer"}}/>  </SwapBoxHeader>
         <SelectContainer variant="first">
            <TokenAmountInput value={quoteToken} placeholder="0.00"  onChange={e => setquoteToken(e.target.value)} />
           
            {JSON.stringify(fromToken) === '{}'? <SelectTokenBtn onClick={showModal}>select token  <DownOutlined /></SelectTokenBtn> : <SelectedTokenCard onClick={showModal}> <MinTokenLogo src={fromToken.logoURI} alt="token logo"    />  <FirstOption>{fromToken.name}</FirstOption> </SelectedTokenCard>}
         </SelectContainer>
           <ArrowContainer><ArrowDownOutlined style={{color:"#c6bebc"}}/>  </ArrowContainer> 
         <SelectContainer variant="second">
         <TokenAmountInput value={baseToken} placeholder="0.00"  onChange={e => setbaseToken(e.target.value)}     />
         {JSON.stringify(toToken) === '{}'? <SelectTokenBtn onClick={showModalTwo}>select token  <DownOutlined /></SelectTokenBtn> : <SelectedTokenCard onClick={showModalTwo}> <MinTokenLogo src={toToken.logoURI} alt="token logo"    />  <FirstOption>{toToken.name}</FirstOption> </SelectedTokenCard>}
         </SelectContainer>
         
         <SwapBtn >swap</SwapBtn>
        </SwapBox>
      </SwapContainer>
    </AppContainer>
    
  );
}

export default App;
