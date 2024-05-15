import { randomBytes } from 'crypto';
import nats, { Message } from 'node-nats-streaming'

console.clear()

const stan = nats.connect('test', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4224',
});

const onClose = () => {
    console.log("NATS connectection close");
    process.exit()

}
const onMsg = (msg: Message) => {
    const data = msg.getData();
    if (typeof data === 'string') {
        console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }
    msg.ack()
}

stan.on('connect', () => {
    console.log("Listener connected to NATS");

    stan.on('close', onClose)

    const options = stan
        .subscriptionOptions()
        .setManualAckMode(true)
        .setDeliverAllAvailable()
        .setDurableName('test:created')

    const subscription = stan.subscribe('test:created', 'listenerQueueGroup', options);

    subscription.on("message", onMsg);
});


process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())
