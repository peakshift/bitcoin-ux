# Contacts

## Notes

- Address reuse, using output descriptors/xpubs would allow you to generate addresses on demand for someone (onchain)
- Lightning, can store a friends nodeid / pub key which can be used to push payments to them, or even chat (see whatsats / sphinx.chat)
- If the output descriptor for a contact is a xpriv then it means that you can sign transactions, maybe some apps would separate contacts by those you can sign and those you can only send (maybe then such contacts are named “Devices” or “Wallets”).
- (onchain) Each contact is able to show a balance, so it would appear that a contact could be seen as a fake payment channel of sorts, as it would allow you to do automatic coin selection and swap funds back and forth without needing to do any manual coin selection
- Lightning, a contact could also represent a real payment channel
- A contact can have a url to another users Tor hidden service (server) which can allow both parties to message each other
- Another use case for the contacts could be to perform social multisig signing. Using this tor hidden service which is able to send a request to your friend/business partner.

## Output Descriptors / xpubs
While you should never ever share your seed phrase, or a private key for one of your accounts or addresses.

You can however share the address, or extended public key (xpub) for an account.

## Use Cases
If you share an extended public key for one of your accounts with someone it is possible for them to generate billions of addresses without ever being able to generate the private keys of those addresses or the account itself.

### Online Shops
A merchant can enter an extended public key on their ecommerce software -- and every time a customer goes to checkout, a new address would be shown to them.

#### Employers
If you dont want to have to give a new address to your employer every 2 - 4 weeks for your salary, you can also share with them an xpub which they can use in their wallet to generate new addresses every time they have to pay your salary.

###### Why not just get your salary into one address?
If you were to get your salary paid into just one address -- then anytime you make a payment using funds from this address, you will be exposing your entire salary history.

## Questions

### How are contacts private?

For security purposes -- the wallet should ask you to set a pin which would encrypt all of the wallet data including contacts. The wallet does not need access to phone numbers.

### What happens if someone leaks my contact details?

Others may have a record of all the addresses of that xpub. If they have made payments, then they will also be leaking their addresses.

### What happens if the name gets leaked?

You can put any name you want.

## Design Challenges

What happens if you need to send a payment to a contact which hasn't sent you any coins prior?

- Coinjoin some other coins before making the payment?
- Select from a coin join balance?
- Wallet can suggest a more private means of payment instead of onchain (lightning)?
- Coin swap?

## Concept: Sharing Output Descriptors in vCard

```typescript
import { vCardJS } from 'vcards-js';
 
//create a new vCard
const vCard = vCardsJS();
 
//set basic properties shown before
vCard.firstName = 'Satoshi';
vCard.middleName = '';
vCard.lastName = 'Nakamoto';
vCard.uid = '69531f4a-c34d-4a1e-8922-bd38a9476a53';
vCard.organization = 'Bitcoin';
 
vCard.note = 'Notes on Satoshi';
 
//set bitcoin contacts
vCard.bitcoin['output_descriptor'] = "pkh([d34db33f/44'/0'/0']xpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL/1/*)";
vCard.bitcoin['bip47'] = "PM8TJJkFHmwP97D8CGrQPQtqgd3GJZvEt9tPewbMtYQK8R7kU65e1HMtmUSoNnkQ8u9hGGGi2sGcddacho9Q8XGp1Uvvz8oJSYrZWpoLzGmJb1sfX1tM";
vCard.bitcoin['ln_node_id'] = "";
vCard.bitcoin['btc_pay'] = "";
 
vCard.version = '3.0'; //can also support 2.1 and 4.0, certain versions only support certain fields
```