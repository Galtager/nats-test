import { randomBytes } from 'crypto';
import nats from 'node-nats-streaming'
import { ItemCreatedListener } from './events/item-created-listener';

console.clear()

const stan = nats.connect('test', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4224',
});

stan.on('connect', () => {
    console.log("Listener connected to NATS");

    stan.on('close', () => {
        console.log("NATS connectection close");
        process.exit()

    })

    new ItemCreatedListener(stan).listen()
});

process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())




