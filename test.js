const datomSpaceClient = require('datomspace-client')

const client = new datomSpaceClient() // connect to the Hyperspace server

const corestore = client.corestore() // make a corestore

const feed = corestore.get(somedatomsKey) // make a hypercore

async function start() {
    const client = new datomSpaceClient() // connect to the Hyperspace server

    const corestore = client.corestore() // make a corestore

    const feed = corestore.get(somedatomsKey) // make a hypercore

    await feed.get() // get some data from the hypercore

}

start()