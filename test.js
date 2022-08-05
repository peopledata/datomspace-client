const datomSpaceClient = require('./')
const crypto  = require('datom-crypto')

//Setup a temp datomspace serever
const hostname = 'uid_datomSpaceServer' ;
//
const mykey = 'b144cb0976305e956bdfebdc2763f6b818f94a57814026daa34cbf138cecb4b2';


async function start() {
    const client = new datomSpaceClient({
        host: hostname
    }) // connect to the Hyperspace server with socket

    console.log(await client.status())
    //console.log(client.network)


    const corestore = client.corestore() // make a corestore

    const datom = corestore.get({
        key: mykey,
        valueEncodeing: 'json'
    }) // make a hypercore


  console.log('the private key is:', datom.key.toString('hex'))

  console.log('the discovery key is:', crypto.discoveryKey(Buffer.from(datom.key)).toString('hex'))

  

}

start()