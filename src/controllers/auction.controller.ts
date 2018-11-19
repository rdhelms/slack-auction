import express from 'express';
const auctionController = express.Router();

interface ISlackAction {
    payload: {
        type: string;
        actions: {
            name: string;
            value: string;
            type: string;
        }[];
        callback_id: string;
        team: {
            id: string;
            domain: string;
        };
        channel: {
            id: string;
            name: string;
        };
        user: {
            id: string;
            name: string;
        },
        action_ts: string;
        message_ts: string;
        attachment_id: string;
        token: string;
        original_message: ISlackRequest;
        response_url: string;
        trigger_id: string;
    };
}

interface ISlackRequest {
    token: string;
    team_id: string;
    team_domain: string;
    channel_id: string;
    channel_name: string;
    user_id: string;
    user_name: string;
    command: string;
    text: string;
    response_url: string;
    trigger_id: string;
}

auctionController.route('/')
    .post(async (req, res) => {
        if (!req.body) {
            return res.json({
                text: 'Invalid command'
            });
        }
        const body = req.body as ISlackRequest | ISlackAction;

        // If the user triggered an action (like a button) we will have a payload
        if ('payload' in body) {
            // TODO: Perform an actual update on the auction rather than reflecting the existing info
            return res.json(body.payload.original_message);
        }

        // Check that the user provided all the necessary info
        if (!body.text || body.text.split(' ').length < 3) {
            return res.json({
                text: 'You must provide an item name, price, and description!'
            });
        }
        const auctionDetails = body.text.split(' ');
        const itemName = auctionDetails[0];
        const itemPrice = auctionDetails[1];
        const itemDescription = auctionDetails[2];

        return res.json({
            response_type: 'in_channel',
            text: `<@${body.user_id}> has created an auction!`,
            attachments: [{
                fallback: itemName,
                title: itemName,
                text: itemDescription,
                fields: [{
                    title: 'Price',
                    value: `$${itemPrice}`
                }],
                callback_id: `${itemName}-${body.user_name}`,
                actions: [{
                    name: 'raise',
                    text: 'Raise $1',
                    type: 'button',
                    value: 1
                }, {
                    name: 'raise',
                    text: 'Raise $5',
                    type: 'button',
                    value: 5
                }, {
                    name: 'raise',
                    text: 'Raise $10',
                    type: 'button',
                    value: 10
                }],
                ts: Math.round(Date.now() / 1000)
            }]
        });
    });

export { auctionController };