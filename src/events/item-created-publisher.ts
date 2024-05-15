import { ItemCreatedEvent } from "./item-created-event";
import { Subjects } from "./subjects";
import { CustomPublisher } from "./custom-publisher";

export class ItemCreatedPublisher extends CustomPublisher<ItemCreatedEvent> {
    readonly subject = Subjects.ItemCreated

    onPublish() {
        console.log(`Event published : ${Subjects.ItemCreated}`);
    }
}