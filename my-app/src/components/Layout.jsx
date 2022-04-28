import client from './apoloClient'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { AppProvider } from '../context/AppContext'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Layout = (props) => {

  return (
 
      <AppProvider>

      <ApolloProvider client={client}>
        <div>
          <Head>
            <title>MarketBA</title>
          </Head>
         <NavBar/> 
           {props.children} 
          
          <Footer />
        </div>
   </ApolloProvider> 
</AppProvider>
  )
}

export default Layout
