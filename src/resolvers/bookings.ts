import models from "../models";
import {randomUUID} from "node:crypto";
import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

//TODO Change later
type updateBookingData = {
    vehicle?: string;
    startDate?: string;
    endDate?: string;
    updatedAt: string;
}



export default {
    Query: {
        bookings: (parent: any, args: any) => {
            return prisma.bookings.findMany();
        },
        booking: (parent: any, {id}: any) => {
            return prisma.bookings.findUnique({
                where: {
                    id
                }
            });
        }
    },
    Mutation: {
        createBooking: async (parent: any, {startDate , endDate, vehicle}: Prisma.BookingsCreateInput) => {
            return prisma.bookings.create({
                data: {
                    id: randomUUID(),
                    vehicle,
                    startDate: new Date(startDate).toISOString(),
                    endDate : new Date(endDate).toISOString(),
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateBooking: async (parent: any, {startDate, endDate, vehicle}: updateBookingData, {id}: any) => {
            const data : updateBookingData = {
                vehicle,
                updatedAt: new Date().toISOString()
            };

            if (startDate) {
                data.startDate = new Date(startDate).toISOString();
            }
            if (endDate) {
                data.endDate = new Date(endDate).toISOString();
            }

            return prisma.bookings.update({
                where: {
                    id
                },
                data
            });
        },
        deleteBooking: async (parent: any, {id}: any) => {
            await prisma.bookings.delete({
                where: {
                    id
                }
            });
            return true;
        }
    }
}
