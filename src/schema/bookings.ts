import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        bookings: [Booking!]
        booking(id: ID!): Booking!
    }
    
    type Booking {
        id: ID!
        date: String!
        vehicle: String!
        createdAt: String!
        updatedAt: String!
    }
    extend type Mutation {
        createBooking(date: String!, vehicle: String!): Booking!
        updateBooking(id: ID!, date: String!, vehicle: String!): Booking!
        deleteBooking(id: ID!): Boolean!
    }
    `;
