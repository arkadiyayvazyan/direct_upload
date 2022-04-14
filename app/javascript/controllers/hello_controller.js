import { Controller } from "@hotwired/stimulus"
import { DirectUploadController } from "activestorage"

export default class extends Controller {
  connect() {
    new DirectUploadController(nil, nil)
    console.log("hello stimulus")
  }
}
