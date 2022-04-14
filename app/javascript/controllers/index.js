import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import * as ActiveStorage  from "activestorage"

ActiveStorage.start()
const application = Application.start()
const context = require.context(".", true, /\.js$/)
application.load(definitionsFromContext(context))