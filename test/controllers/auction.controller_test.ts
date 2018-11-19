import { expect } from 'chai';
import axios from 'axios';

describe('index', function() {
    describe('POST to /', function() {
        let response: unknown;
        before(async function() {
            response = (await axios.post<unknown>('http://localhost:3000/', { 
                channel_id: 'CHANNEL_ID',
                channel_name: 'Some Channel',
                user_id: 'Some User',
                user_name: 'USER_ID',
                command: '/auction',
                text: 'someName somePrice someDescription'
            })).data;
        });
        it('returns response', function() {
            expect(response).to.exist;
        });
    });
});