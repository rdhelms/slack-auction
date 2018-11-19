import { expect } from 'chai';
import axios from 'axios';

describe('index', function() {
    describe('POST to /', function() {
        let response: unknown;
        before(async function() {
            response = (await axios.post<unknown>('http://localhost:3000/', {})).data;
        });
        it('returns test message', function() {
            expect(response).to.deep.equal({
                text: 'Perhaps someday I can help you create an auction'
            });
        });
    });
});