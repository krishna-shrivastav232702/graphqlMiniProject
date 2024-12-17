import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import { ApolloClient } from '@apollo/client'

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri:import.meta.env.VITE_GRAPHQL_SERVER,
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
    <App />
    </ApolloProvider>
  </StrictMode>,
)
