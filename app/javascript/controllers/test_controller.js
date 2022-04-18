import { Controller } from "stimulus"
import consumer from "../channels/consumer"

export default class extends Controller {
    connect() {
        console.log("connected stimulus")
        this.subscription = consumer.subscriptions.create("TestChannel",
            {
                connected() {
                    this.send({ message: 'Client is live'})
                },
                received(data) {
                    console.log(data)
                }
            }
        );
        
    }
}