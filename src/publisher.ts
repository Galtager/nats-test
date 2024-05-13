import nats from 'node-nats-streaming'

const stan = nats.connect('test', 'abc', {
    url: 'http://localhost:4224',
});

console.log("hi")

stan.on('connect', () => {
    console.log("Publisher connected to NATS")

    const data = JSON.stringify({
        id: '123',
        title: 'connect',
        price: 20
    })

    stan.publish('test:created', data, () => {
        console.log("Event published")

    })
})