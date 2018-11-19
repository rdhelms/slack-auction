import express from 'express';
const auctionController = express.Router();

auctionController.route('/')
    .post(async (req, res) => {
        res.json({
            text: 'Perhaps someday I can help you create an auction'
        });
    });

export { auctionController };