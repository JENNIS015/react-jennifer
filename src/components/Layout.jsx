import client from './apoloClient'
import { ApolloProvider } from "@apollo/client";
 
const Layout = (props) => {
  return (
  
      <ApolloProvider client={client}>
    
       <div>
          <div className="container">
            <div className="row">
              <div className="col l2 m2 s2">
                <p>Filtros</p>
              </div>
              <div className="col l10 m10 s1">
                <div className="row">{props.children}</div>
              </div>
            </div>
          </div>    </div>
 
      </ApolloProvider>

  )
}

export default Layout
