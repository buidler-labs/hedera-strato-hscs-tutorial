# Hedera Strato - HSCS 2.0 Tutorial follow-along
``` bash
$ npm start

> hedera-strato-hscs-tutorial@1.0.0 start
> node main.mjs

Creating a Strato API Session.
Loading and compiling the LookupContract code.
Uploading the contract to Hedera with Alice's initial phone number.
Contract is live at 0.0.29567092
Alice's phone number stored on contract is: 111111
Registering Bob's phone number.
Looking up Bob's phone number.
Bob's, contract-stored, phone number is: 222222
```

This repo is the [hedera-strato-js](https://github.com/buidler-labs/hedera-strato-js) adaptation of Hedera's part 1 tutorial series titled "How To Deploy Smart Contracts on Hedera" ([video](https://youtu.be/L9Tm6yn_ayY), [article](https://hedera.com/blog/how-to-deploy-smart-contracts-on-hedera-part-1-a-simple-getter-and-setter-contract)). 

Although the [main](./main.mjs) code might look intimidating at first with its whopping 25 lines of code, most of it are logs which, if stripped away, yeilds the true underlying beauty of our strato endevour:
``` js
const { session } = await ApiSession.default();
const lookupContract = await Contract.newFrom({ path: './LookupContract.sol', ignoreWarnings: true });
const liveContract = await session.upload(lookupContract, { _contract: { gas: 100000 } }, 
    "Alice", 
    111111
);
await liveContract.setMobileNumber("Bob", 222222);

console.log(`Alice's phone number: ${await liveContract.getMobileNumber("Alice")}`);
console.log(`Bob's phone number: ${await liveContract.getMobileNumber("Bob")}`);
```

At its essence, in only 6 lines of code, it shows you how to load, compile, upload execute and query a smart contract on the Hedera network using strato, a more human-friendly sdk for developing on the hashgraph. Compare this to [the official sdk implementation](https://github.com/ed-marquez/hedera-example-contract-getter-setter/blob/master/index.js) of the same functionality (minus the compilation part which is done offline) and spot the differences yourself. 

To find more about the library's capabilties, roadmap and more, [please check and join the discussion at its official repo](https://github.com/buidler-labs/hedera-strato-js).

## Firing it up

Before diving in, just make sure you have a [node CLI](https://nodejs.org/en/download/) version `>=16` installed then do the normal
```
git clone https://github.com/buidler-labs/hedera-strato-hscs-tutorial.git
npm install
```
to fetch the repo and its dependencies.

Lastly, you will need to define a local `.env` file providing some values for the library to work with. Please see the [`.env.sample`](./.env.sample) for info and further details. Assuming you are using a `testnet` account, the minimum required `.env` defined values should look quite similar to:

```
HEDERAS_NETWORK=testnet
HEDERAS_OPERATOR_ID=0.0...
HEDERAS_OPERATOR_KEY=91132178...
```

If you don't know how to create a free testnet account, [follow Ed's excelent walkthrough](https://www.youtube.com/watch?v=L9Tm6yn_ayY&t=88s). 

Then, you can simply run the example by doing a `npm start` call. 

**And that's it!** You managed to successfully compile, upload and execute a smart-contract on the Hedera network. Happy coding!

## License
This work has been published under the MIT License.