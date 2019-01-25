import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import Home from './components/Home';
import Info from './components/Info';
import './index.css';
import './flexbox.css';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://zymx60m0x.sse.codesandbox.io/' }),
  cache: new InMemoryCache(),
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <Router>
      <nav>
        <ul className="button">
          <li>
            <NavLink activeClassName="current" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="current" to="/info">Info</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </nav>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
