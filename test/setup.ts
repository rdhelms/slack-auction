//tslint:disable no-console
import { app } from '../src/app';
import { Socket, Server } from 'net';
import debug from 'debug';

const testDebug = debug('test');

let server: Server;
const sockets: Socket[] = [];

const port = process.env.PORT || 3000;
server = app.listen(port, async () => {
    console.log('Test server started');
    run();
});

server.once('connection', (socket) => {
    testDebug(`socket ${sockets.length} connected`);
    sockets.push(socket);
    socket.once('close', () => {
        testDebug(`socket ${sockets.indexOf(socket)} closed`);
        sockets.splice(sockets.indexOf(socket), 1);
    });
});

after(function() {
    server.close((e: Error) => {
        if (e) {
            console.log(`Test Server Error:\n`, JSON.stringify(e, null, 4));
        } else {
            console.log('Test server closed');
            process.exit();
        }
    });
    // Just in case there are still any remaining open test sockets, destroy them
    setTimeout(() => {
        sockets.forEach((socket) => {
            testDebug(`destroying socket ${sockets.indexOf(socket)}`);
            socket.destroy();
        });
    }, 5000);
});