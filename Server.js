var isRunning = false
console.log("Server is running")
isRunning = true
console.log("Server is running locally")
var localPort = 8776
const minPort = 1
const maxport = 9999
var userName = 'TheNoob'
if (localPort >= minPort && localPort <= maxport) {
    console.warn(`Please be careful with Server.js, as Server.js is a local-time server.\nWhat is a local-time server? A local-time server is a server ran on your computer.\nServer.js uses it's own requirements. They are listed in ***Server.json***`)
    console.log(`Server is running on a localServerPort which is ${localPort}`)
    console.info(`Your localServerPort is connected with a localPort. The localPort ${localPort} is a port connected to a localServer.`)
    console.log(`Hello, ${userName}! Thank you for using Server.js!`)
    console.log('Server.js website: https://free-4351360.webador.com/')
    console.debug(`\nDEBUG DATA: ${isRunning}, ${userName}, ${localPort}`)
} else {
    isRunning = false
    console.error(`Your localPort is over maximum or under minimum port level, please try again\nPortError: ${localPort} ~~~ cannot connect to localServerPort\nCode503:error; not found or can't connect.\n\n\nisLocalServerRunning::${isRunning}`)
}

console.info("Version: alpha_server1\nIsAlpha: true\nIsBeta: false")