import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import { resolvers, defaults } from './graphql/resolvers';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  clientState: {
    defaults,
    resolvers,
  },
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
