import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_QUERY } from "../../queries";

const AuthorList = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data.authors);

  return (
    <div>
      <h2>Author List</h2>
      {data &&
        data.authors.map((author) => (
          <div key={author.id}>
            <h2>{author.name}</h2>
            <p>{author.age}</p>
          </div>
        ))}
    </div>
  );
};
export default AuthorList;
