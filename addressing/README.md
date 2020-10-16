# Addressing / Accounts

Accounts and contacts are locations which a user may want to transfer value to/from.

The method in which this is done can itself be facilitated by the account or contact.

- How can a contact be a method?

- - Think of a way to generalise accounts and contacts

  - - Would generalisation cause more confusion to the user. Is it better to be explicit, and defrenciate the two locations?

Value can move to and from either an account or a contact.

- https://www.easypaysy.org/assets/easypaysy_white_paper.pdf
- https://bitcoin.stackexchange.com/questions/87558/how-can-one-see-if-an-address-is-multisig

Bitcoin Q&A: Public keys vs. addresses https://www.youtube.com/watch?v=8es3qQWkEiU

---

### Bitcoin Addresses

#### BIP44

- refers to the accepted common standard to derive non segwit addresses. These addresses always begin with a 1.

#### BIP49

- refers to the accepted common standard of deriving segwit "compatibility" addresses. These addresses begin with a 3.

#### BIP84

- refers to the accepted common standard of deriving native segwit addresses. These addresses always begin with bc1 - and are referred to bech32 addresses. 

### On-chain

#### BIP47

- refers to a method of generating a reusable payment code which can relies on a notification transaction to the receiver in order to establish a payment channel that can later be scanned by the receivers wallet.

#### DNS

- It should be noted that there are concerns about how effiecent it is to store and qurey DNS on bitcoin. That being said being able to register and query a name like `satoshi.hodl` ...

#### Lightning Network

- Pub Key
- 

