import { Controller } from "stimulus"
import { DirectUploadController } from "./direct_upload_controller"
import consumer from "../channels/consumer"

export default class extends Controller {
    static targets = [ "input", "bar" ]
    
    connect() {
        const input = this.inputTarget
        const bar = this.barTarget
        input.addEventListener("change", () => {
            const uploader = new DirectUploadController(input, input.files[0])
            uploader.start((callback) => {
                console.log(callback)
            })
        })

        this.element.addEventListener("direct-upload:progress", (event) => {
            const { id, progress } = event.detail
            console.log(id, progress)
        })

        this.subscription = consumer.subscriptions.create("ProgressChannel",
            {
                connected() {
                    this.send({ message: 'Progress client is live'})
                },
                received(data) {
                    //console.log(data)
                    bar.value = data/100
                }
            }
        );
        
    }
}
