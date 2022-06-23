import React from 'react';
import styled from 'styled-components';
import { FirstOption, Logo, NavCenter, NavContainer, NavLeft, SecondOption } from './App.style';
import { ConnectButton } from "web3uikit"
import { useMoralis } from 'react-moralis';

const Navbar = () => {
    const  {account, authenticate, isAuthenticating, isUnauthenticated }  =  useMoralis()
    return <NavContainer>
        <NavLeft> <Logo src='img/logo.png'  alt='logo'    /> </NavLeft>
        <NavCenter><FirstOption>swap</FirstOption>  <SecondOption>Pool</SecondOption></NavCenter>
       { isUnauthenticated ? <ConnectButton  signingMessage='welcome  to  debble  dex '/>  : <FirstOption>{account}</FirstOption>}
    </NavContainer>
}



export default Navbar;