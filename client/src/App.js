import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Components
import { BookList, AuthorList } from "./components";

console.log(process.env.NODE_ENV, process.env.REACT_APP_API);

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_API,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Online Library</h1>
        <BookList />
        <AuthorList />
      </div>
    </ApolloProvider>
  );
}

export default App;
