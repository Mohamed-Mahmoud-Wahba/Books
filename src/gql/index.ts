import gql from 'graphql-tag'

export const BOOKS_NAME = gql `
query BOOKS_NAME{
  books{
   id
   name
 
     }
   }
`;

export const SINGLE_BOOK = gql `query getAbook($bookId:ID!){
  book(id :$bookId){
    id
    name
    publisher {
      name
    }
    authors {
      name
    }
  }
}`