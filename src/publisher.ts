import nats from 'node-nats-streaming'

console.clear()

const stan = nats.connect('test', 'abc', {
    url: 'http://localhost:4224',
});

stan.on('connect', () => {
    console.log("Publisher connected to NATS")

    const data = JSON.stringify({
        id: '123',
        title: 'connect',
        price: 20
    })

    stan.publish('payment-service', data, () => {
        console.log(" Event published");

    })

})