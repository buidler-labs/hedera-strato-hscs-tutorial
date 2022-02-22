import { 
    ApiSession,
    Contract 
} from '@buidlerlabs/hedera-strato-js';
import { ContractId } from '@hashgraph/sdk';

console.log("Creating a Strato API Session.");
const { session } = await ApiSession.default();

console.log("Loading and compiling the LookupContract code.");
const lookupContract = await Contract.newFrom({ path: './LookupContract.sol', ignoreWarnings: true });

console.log("Uploading the contract to Hedera with Alice's initial phone number.");
const liveContract = await session.upload(lookupContract, { _contract: { gas: 100000 } }, 
    "Alice", 
    111111
);
console.log(`Contract is live at ${ContractId.fromSolidityAddress(await liveContract.getSolidityAddress())}`);
console.log(`Alice's phone number stored on contract is: ${await liveContract.getMobileNumber("Alice")}`);

console.log("Registering Bob's phone number.");
await liveContract.setMobileNumber("Bob", 222222);

console.log("Looking up Bob's phone number.");
console.log(`Bob's, contract-stored, phone number is: ${await liveContract.getMobileNumber("Bob")}`);