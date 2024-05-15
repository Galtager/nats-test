import nats from 'node-nats-streaming'
import { ItemCreatedPublisher } from './events/item-created-publisher';

console.clear()

const stan = nats.connect('test', 'abc', {
    url: 'http://localhost:4224',
});

stan.on('connect', () => {
    console.log("Publisher connected to NATS")

    const publisher = new ItemCreatedPublisher(stan)
    publisher.publish({
        id: '123',
        title: 'connect',
        price: 20

    })
})