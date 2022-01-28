import { 
    HederaNetwork, 
    Contract 
} from '@buidlerlabs/hedera-strato-js';
import { ContractId } from '@hashgraph/sdk';

console.log("Creating a Strato API Session.");
const hapiSession = await HederaNetwork.defaultApiSession();

console.log("Loading and compiling the LookupContrat code.");
const lookupContract = await Contract.newFrom({ path: './LookupContract.sol', ignoreWarnings: true });

console.log("Uploading the contract to Hedera.");
const liveContract = await hapiSession.upload(lookupContract, { _contract: { gas: 100000 } }, 
    "Alice", 
    111111
);
console.log(`Contract is live at ${ContractId.fromSolidityAddress(await liveContract.getSolidityAddress())}`);
console.log(`Alice's phone number is: ${await liveContract.getMobileNumber("Alice")}`);

console.log("Registering Bob's phone number.");
await liveContract.setMobileNumber("Bob", 222222);

console.log("Looking up Bob's phone number.");
console.log(`Bob's phone number is: ${await liveContract.getMobileNumber("Bob")}`);