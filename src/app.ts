import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { auctionController } from './controllers/auction.controller';

const app = express();

// CORS middleware
app.use(cors({
    origin: process.env.NODE_ENV !== 'production' ? true : false // reflects request origin if not production
}));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));
// Parse application/json
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use((req, res, next) => {
    console.log(req.method); // tslint:disable-line
    console.log(req.url); // tslint:disable-line
    console.log(req.body); // tslint:disable-line
    next();
});

// TODO: Add middleware to verify the request is from slack

// Routes and Controllers
app.use('/', auctionController);

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        // tslint:disable-next-line no-console
        console.log(`Listening on port ${port}`);
    });
}

export { app };