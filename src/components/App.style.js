import styled from 'styled-components'
import { resetCSS } from './Reset.style'


 export const AppContainer = styled.div`
  background-image: linear-gradient(to bottom right, #550410, #080619) ;
  width: 100vw ;
  height: 100vh ;
  position:relative ;
  ${resetCSS}
`

export const NavContainer =  styled.div`
   display: flex;
   justify-content: space-between ;
   padding: 15px ;
   height: 60px ;
   
`
export const NavLeft  =  styled.div`

`
export const  NavCenter  =  styled.div `
  background-color:  black ;
    color: white ;
    padding: 20px ;
    display: flex;
    align-items: center ;
    justify-content: space-between ;
    width: 150px ;
    border-radius: 10px;
    border-radius: 14px ;
`
export const NavRight =  styled.div ``
export const FirstOption =  styled.span`
  display: inline-block ;
  font-weight: bold ;
  text-transform: capitalize;
  cursor: pointer ;
 
`
export const SecondOption =  styled.span `
display: inline-block ;
font-weight: bold ;
  text-transform: capitalize;
  cursor: progress;
`
export const Logo =  styled.img`
   width:  40px ;
   cursor: pointer ;

`
//  THE  SWAP  BOX

export  const  SwapContainer =  styled.div `
   
    width:   100vw;
    height: 80vh ;
    display: flex;
    align-items: center ;
    justify-content: center ;


`

export const SwapBox = styled.div`
   width: 430px ;
   height: 350px ;
   background-color: yellow ;
   border-radius:  14px ;
   padding: 9px ;
   background-color: #191B1F ;
   color: white ;
   display: flex;
   align-items: center ;
   flex-direction: column ;
   justify-content: space-between ;

`
export const  SwapBoxHeader  = styled.div`
 display: flex;
 justify-content: space-between ;
 
 padding: 10px ;
 width: 99% ;


`

export const TokenAmountInput =  styled.input`
  padding: 15px 5px ;
  background-color: inherit;
  border-radius: 14px ;
  outline: none ;
  border: unset ;
  color: white ;
 


`
export const SelectTokenBtn =  styled.button`
  padding: 10px 20px;
  background-color: #D70000 ;
  color: white;
  text-transform: capitalize ;
  font-weight: 400 ;
  font-size: 19px ;
  border-radius: 14px ;
  cursor: pointer;

`
export const SwapBtn =  styled.button`
  width: 90% ;
  padding: 20px 20px ;
  cursor: pointer;
  border-radius: 10px ;
  background-color:#172A42 ;
  margin-top: 20px ;
  color: white ;
  text-transform:  capitalize;
  font-weight:bold ;
  font-size: 20px;




`


export  const  SelectContainer =  styled.div`
margin-top:${props => props.variant === "first" ? "50px " : "5px"} ;
   width: 95% ;
   height: 20px ;
   background-color: #212429 ;
   border-radius: 14px ;
   padding: 35px 7px;
   display: flex;
   align-items: center ;
   display: flex;
   justify-content: space-between ;
   &:hover{
     border: 1px solid #40444F ;
   }
`

export const ArrowContainer = styled.div`
width: 100% ;
display: flex;
align-items: center ;
justify-content: center ;

`

export  const ModalContainer  =  styled.div `
   
     background-color:  black;
     width: 300px;
     height: 400px ;
     position: absolute ;
     color:  white ;
     top: 20% ;
     left:  38%;
      padding: 14px ;
      border-radius: 14px ;
      overflow: auto ;
`

export const ModalHeader = styled.div`
   background-color: #191B1F;
   padding: 13px 7px ;
   display: flex;
   justify-content: space-between ;
   border-radius: 10px;
   color: white ;
   


`
export const CoinCard = styled.div`
  cursor:  pointer ;
  &:hover{
    background-color: #212429 ;
    border-radius: 10px ;
    padding: 5px ;
  }
`

export const TokenSymbol = styled.span`
  
`
export const TokenLogo  =  styled.img `
  width: 25px;
  margin-right: 15px ;

`

export const LoadingDiv  =  styled.div `
  width:  100% ;
  height: 100% ;
  display: flex;
  align-items: center ;
  justify-content: center ;
`
export const SelectedTokenCard = styled(SelectContainer)`
  padding: 10px ;

  &:hover{
    border: none;
  }
`

 export const ExchangeRateContainer = styled.div`
   width: 98% ;
   height: 30px  ;
   background-color: inherit ;
   text-align: right ;
   padding-top:4px ;
   
 
 ` 


export  const  MinTokenLogo = styled.img`

  width: 25px;
  border-radius: 50%;
  cursor: pointer ;

`