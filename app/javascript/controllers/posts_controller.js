import { Controller } from "stimulus"
import { DirectUploadController } from "./direct_upload_controller"

export default class extends Controller {
    static targets = [ "input", "bar" ]
    connect() {
        const input = this.inputTarget
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
    }
}
