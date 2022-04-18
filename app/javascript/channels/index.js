// Import all the channels to be used by Action Cable
//import "./progress_channel"
//import "./test_channel"
// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
console.log("channels/index.js")