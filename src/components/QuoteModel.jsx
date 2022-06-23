import { CloseCircleTwoTone, CloseOutlined, CloseSquareOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { CoinCard, FirstOption, LoadingDiv, ModalContainer, ModalHeader, TokenLogo, TokenSymbol } from './App.style';
import { useState } from 'react';
import { useOneInchTokens } from 'react-moralis';
import { Avatar, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { useExchangeDetails } from './ExchangeState';


const QuoteModal = ({visibility}) => {
    const { getSupportedTokens, data, isFetching, isLoading, error } = useOneInchTokens({ chain: 'bsc' });
    const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
       const {tokenOne, tokenTwo} = useContext(useExchangeDetails)
       //const [fromToken, setFromToken] = tokenOne;
       const [toToken, settoToken] = tokenTwo

     const closeModal  = ()  =>  {
       visibility(false)
     }
   
      const  selectedToken  = (myToken) => {
         
          settoToken(myToken)
         }

         if(error) {
          return <h3>{error.message}</h3>
         }
          
    
    return  <ModalContainer>
        <ModalHeader> <FirstOption>select token</FirstOption>  <CloseOutlined onClick={closeModal} style={{fontSize : "19px", cursor: "pointer", color: "white"}}/> </ModalHeader>
        
        {isLoading && <LoadingDiv>  <Spin indicator={antIcon} /> </LoadingDiv>}
          { data.tokens && Object.values(data.tokens).map(token => (
           <CoinCard key={token.address} onClick={() => selectedToken(token)}>
             <TokenLogo src={token.logoURI}          />
              <TokenSymbol>{token.symbol}</TokenSymbol>
           </CoinCard>
          ))}
    </ModalContainer>
}


export default QuoteModal;