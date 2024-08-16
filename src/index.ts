import cors from 'cors';
import express from 'express';
import {
    ApolloServer
} from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';


const app = express();

app.use(cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const main = async () => {
    await server.start();
    server.applyMiddleware({
        app
    });

    app.listen({
        port: 8000
    }, () => {
        console.log(`Apollo Server on http://localhost:8000${server.graphqlPath}`);
    });
};
main();


