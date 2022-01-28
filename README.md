# Hedera Strato - HCS Tutorial follow-along
``` bash
$ npm start
Creating a Strato API Session.
Loading and compiling the LookupContrat code.
Uploading the contract to Hedera.
Contract is live at 0.0.29567029
Alice's phone number is: 111111
Registering Bob's phone number.
Looking up Bob's phone number.
Bob's phone number is: 222222
```

This repo is the [hedera-strato-js](https://github.com/buidler-labs/hedera-strato-js) adaptation of Hedera's part 1 tutorial series titled "How To Deploy Smart Contracts on Hedera" ([video](https://youtu.be/L9Tm6yn_ayY), [article](https://hedera.com/blog/how-to-deploy-smart-contracts-on-hedera-part-1-a-simple-getter-and-setter-contract)). 

It shows you how to load, compile, upload execute and query a smart contract on the hedera network using strato, a more human-friendly sdk for Hedera development. To find more about the library's capabilties and roadmap, [please check its official repo](https://github.com/buidler-labs/hedera-strato-js).

# Firing it up

Before diving in, just make sure you have a [node CLI](https://nodejs.org/en/download/) version `>=16` installed then do the normal
```
git clone https://github.com/buidler-labs/hedera-strato-hcs-tutorial.git
npm install
```
to fetch the repo and its dependencies.

Lastly, you will need to define a local `.env` file providing some values for the library to work with. Please see the [`.env.sample`](./.env.sample) for info and further details. Assuming you are using a `testnet` account, the minimum required `.env` defined values should look quite similar to:

```
HEDERA_NETWORK=testnet
HEDERA_OPERATOR_ID=0.0...
HEDERA_OPERATOR_KEY=91132178...
```

If you don't know how to create a free testnet account, [follow Ed's excelent walkthrough](https://www.youtube.com/watch?v=L9Tm6yn_ayY). 

Then, you can simply run the example by doing a `npm start` call. 

**And that's it!** You managed to successfully compile, upload and execute a smart-contract on the Hedera network. Happy coding!

## License
This work has been published under the MIT License.