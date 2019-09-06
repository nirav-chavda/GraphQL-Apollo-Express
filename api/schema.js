import {
    gql
} from 'apollo-server-express';

// The gql is a template literal tag that is used for writing GraphQL schema as types
const typeDefs = gql `
    type Person {
        id: Int
        name: String
        gender: String
        homeworld: String
    }

    type Query {
        allPeople: [Person]
        person(id: Int!): Person
    }
`;

/*
Our schema consists of two queries in total. 
The first is allPeople through which all characters in our API can be fetched and listed. 
The second query person is to retrieve one person using their id. 
Both of these query types are dependent on a custom type called Person object which contains four properties.
*/
export default typeDefs;