import { Message } from "node-nats-streaming";
import { CustomListener } from "./custom-listener";

export class ItemCreatedListener extends CustomListener {
    queueGroupName = 'item-created';
    subject = 'payment-service'

    onMessage(data: any, msg: Message) {
        console.log('Event data', data)
        msg.ack()
    }
}