import express from 'express';
const indexController = express.Router();

indexController.route('/')
    .get(async (req, res) => {
        try {
            res.send('Welcome to the Slack Auction API');
        } catch(err) {
            /* istanbul ignore next */
            res.status(500).send(`${(<Error>err).name}: ${(<Error>err).message}`);
        }
    });

export { indexController };