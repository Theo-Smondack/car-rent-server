import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        bookings: [Booking!]
        booking(id: ID!): Booking!
    }
    
    type Booking {
        id: ID!
        vehicle: String!
        startDate: String!
        endDate: String!
        createdAt: String!
        updatedAt: String!
    }
    extend type Mutation {
        createBooking(vehicle: String!, startDate: String!, endDate: String!): Booking!
        updateBooking(id: ID!, vehicle: String!, startDate: String!, endDate: String!): Booking!
        deleteBooking(id: ID!): Boolean!
    }
    `;
