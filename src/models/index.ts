type Booking = {
    id: string;
    date: string;
    vehicle: string;
    createdAt: string;
    updatedAt: string;
}

type Bookings = {
    [key: string]: Booking;
}


let bookings : Bookings = {
    "1": {
        id: '1',
        date: '2020-01-01',
        vehicle: 'Ferrari SF90 Stradale',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
    },
    "2": {
        id: '2',
        date: '2020-01-02',
        vehicle: 'Porsche 992 Turbo S',
        createdAt: '2020-01-02',
        updatedAt: '2020-01-02'
    },
    "3": {
        id: '3',
        date: '2020-01-03',
        vehicle: 'BMW M5 Competition',
        createdAt: '2020-01-03',
        updatedAt: '2020-01-03'
    }
}

export default {
    bookings
};
