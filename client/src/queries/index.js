import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;
