import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS_QUERY } from "../../queries";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h2>BookList</h2>
      {data.books &&
        data.books.map((book) => (
          <div key={book.id}>
            <h3>{book.name}</h3>
            <p>{book.genre}</p>
          </div>
        ))}
    </div>
  );
};
export default BookList;
