import models from "../models";
import {randomUUID} from "node:crypto";

export default {
    Query: {
        bookings: (parent: any, args: any) => {
            return Object.values(models.bookings);
        },
        booking: (parent: any, {id}: any) => {
            return models.bookings[id];
        }
    },
    Mutation: {
        createBooking: (parent: any, {date, vehicle}: any) => {
            const id = randomUUID();
            const booking = {
                id,
                date,
                vehicle,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            models.bookings[id] = booking;
            return booking;
        },
        updateBooking: (parent: any, {id, date, vehicle}: any) => {
            const booking = models.bookings[id];
            if (!booking) {
                return null;
            }
            booking.date = date;
            booking.vehicle = vehicle;
            booking.updatedAt = new Date().toISOString();
            return booking;
        },
        deleteBooking: (parent: any, {id}: any) => {
            const { [id]: booking, ...otherBookings } = models.bookings;
            if (!booking) {
                return false;
            }
            models.bookings = otherBookings;
            return true;
        }
    }
}
