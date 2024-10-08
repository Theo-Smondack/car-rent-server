
import bookingSchema from './bookings';
import {gql} from "apollo-server-express";

const linkSchema = gql`
      type Query {
        _: Boolean
      }
    
      type Mutation {
        _: Boolean
      }
    
      type Subscription {
        _: Boolean
      }
    `;
export default [linkSchema, bookingSchema];
