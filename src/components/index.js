import React from "react";

export {default as Navbar} from './Navbar/Navbar'
export const Cryptocurrencies=React.lazy(()=>import('./Crypto-currencies/Cryptocurrencies'))
export const Homepage=React.lazy(()=>import('./Homepage/Homepage'))
export const CryptoDetails=React.lazy(()=>import('./Crypto-details/CryptoDetails'))
export const News=React.lazy(()=>import('./News/News'));
