import { Message } from "node-nats-streaming";
import { CustomListener } from "./custom-listener";
import { ItemCreatedEvent } from "./item-created-event";
import { Subjects } from "./subjects";

export class ItemCreatedListener extends CustomListener<ItemCreatedEvent> {
    readonly subject = Subjects.ItemCreated
    queueGroupName = 'payment-service';

    onMessage(data: ItemCreatedEvent['data'], msg: Message) {
        console.log('Event data', data)
        msg.ack()
    }
}