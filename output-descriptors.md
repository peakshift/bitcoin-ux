# Contacts

## Abstract

- Sharing output descriptor with a friend.
- Contacts are either addresses or output descriptors with xpubs
- Accounts / xpriv (user controlled)
- Privacy concerns for giving out a xpub?
- How to keep track of the xpubs you gave out?
- https://twitter.com/pierre_rochard/status/1299118562976690176

## Rationale

- Why…?

## Method

### BIP32

- m/iH/0/k corresponds to the k'th keypair of the external chain of account number i of the HDW derived from master m.
- m/iH/1/k corresponds to the k'th keypair of the internal chain of account number i of the HDW derived from master m.

m - master key

m/3 - derive the address with just the master pubkey

m/3' — need the private key to derive the address

### Output Descriptors

Private key or public key and any other derivation information.

You can think of it like a function — 

https://bitcoinops.org/en/topics/output-script-descriptors/

#### Whats the most basic output descriptor?

Something which doesnt use bip32 at all

https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md#examples

- `pk(0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)` describes a P2PK output with the specified public key.
  - Single Address

`pkh(xpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw/1'/2)` describes a P2PKH output with child key *1'/2* of the specified xpub.

- output descriptor 
  - Third non-hardened child of the second harden child	
    - this is one address but this is 4billion +
      - `pkh(xpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw/1'/2/*)`

`pkh([d34db33f/44'/0'/0']xpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL/1/*)` describes a set of P2PKH outputs, but additionally specifies that the specified xpub is a child of a master with fingerprint `d34db33f`, and derived using path `44'/0'/0'`.

- /1/*
  - derive the first non harden child and all of its chidlren
  - came from [d34db33f/44'/0'/0']
- [d34db33f/44'/0'/0']
  - for reference of the private key of the wallet / device the output descriptor was exported from

---

pkh([d34db33f/44'/0'/0']xpub6ERApfZwUNrhLCkDtcHTcxd75RbzS1ed54G1LkBUHQVHQKqhMkhgbmJbZRkrgZw4koxb5JaHWkY4ALHY2grBGRjaDMzQLcgJvLJuZZvRcEL/1/*)

- a formula for one or a whole set of addresses

---

Pay to PubKey

- 

https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?input:0&expand

- OP_PUSHBYTES_65 04ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84c OP_CHECKSIG

OP_EQUALVERIFY

- if check false then fail

15:44

nothingmuch

https://bitcoinops.org/en/topics/output-script-descriptors/

https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md#examples

https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?input:0

https://blockstream.info/tx/3748a7fd6a8da8db0bcb8c4153816b5ee69bcbc7021cb8d0743e0995b1821f29?output:4&expand

1 + 2 * 3

1 + (2 * 3)

1 + 6

= 7

(1 + 2) * 3

(+ 1 (* 2 3))

(* (+ 1 2) 3)

1 2 3 * +

1 6 +

3 1 2 + *

var pubkey = ....; var signature = ...;

if (op_hash160(pubkey) == ...) {   op_checksig(pubkey, signature); }

<signature> <pubkey> OP_DUP OP_HASH160 OP_EQUALVERIFY OP_CHECKISIG

[ sig, pk ]

[ sig, pk, pk ]

[ sig, pk, H(pk) ]

[ sig, pk, hash ]

<signature> <pubkey> OP_DUP OP_HASH160 <pkhash> OP_EQUALVERIFY OP_CHECKISIG

[ sig, pk, computed_hash, expected_hash ]

OP_EQUAL

if computed_hash == expected_hash {  [ sig, pk ]  } else {   fail }

scriptPubKey = { OP_DUP OP_HASH160 <pkhash> OP_EQUALVERIFY OP_CHECKISIG }

scriptSig = { <sig>, <pubkey> }

- read up Andreas A. Programming Bitcoin 

<pk1> <pk2> 1 2 OP_CHECKMULTISIG

IF <pk1> ELSE <pk2> OP_CHECKSIG;

IF <pk1> ELSE <pk2> THEN OP_CHECKSIG

FORTH YOU LOVE IF HONK THEN

scriptSig = [ sigWithPk1, TRUE ]

scriptSig [ sigWithPk2, FALSE ]

OP_CAT





OP_DUP OP_CAT OP_DUP OP_CAT OP_DUP OP_CAT

- ddos attack



- `pkh(<pubKey>)` describes a P2PKH output with the specified public key.
  - take the key, compute the hash
  - take the hash and put inside
    - OP_DUP OP_HASH160 OP_PUSHBYTES_20 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG

- `wpkh(<pubKey>)` describes a P2WPKH output with the specified public key.
  - OP_0 <pubKeyHash>
    - Push 0 on top of the stack



@nothingmuch

#### Hardened

- ...

#### Unhardened

- Able to have a watching wallet

### Contact Sharing

- File Format: vCard?
- _Sharing contact may cause some problems with…_
- Password Authenticated Key Exchange
  - Needs a server
    - Connect to a server
      - Wormhole Send
        - Type things into a pipe
        - Give it a file
          - useful for exchanging ssh keys
            - Output Code: Seven - Millionaire - Salad
              - Easy to dictate over the phone
              - Easy to transfer between devices
      - Wormhole Receive
        - I connect to channel Seven
          - Now we have a bi-directional connection to each other
            - Diffy Hillman Key Exchange
              - Attack Vector
                - Man in the middle
              - Alternative:
                - One Time Password
                  - If it fails we have to retry with a new code

## Wallet

- Able to sign transaction fragments in the application
- Share a transaction for signing



## vCard Code Reference

```typescript
import { vCardJS } from "vcards-js";
 
//create a new vCard
const vCard = vCardsJS();
 
//set basic properties shown before
vCard.firstName = "Satoshi";
vCard.middleName = "";
vCard.lastName = "Nakamoto";
vCard.uid = "69531f4a-c34d-4a1e-8922-bd38a9476a53";
vCard.organization = "Bitcoin";
 
vCard.workPhone = "312-555-1212";
vCard.birthday = new Date(1985, 0, 1);
vCard.title = "Software Developer";
vCard.url = "https://github.com/enesser";
vCard.workUrl = "https://acme-corporation/enesser";
vCard.note = "Notes on Eric";
 
//set other phone numbers
vCard.homePhone = "312-555-1313";
vCard.cellPhone = "312-555-1414";
vCard.pagerPhone = "312-555-1515";

//set email addresses
vCard.email = "satoshi@bitcoin.hodl";
vCard.workEmail = "s.nakamoto@bitcoin.hodl";
 
//set bitcoin contacts
vCard.bitcoin["output_descriptor"] = "pkh(xpub68Gmy5EdvgibQVfPdqkBBCHxA5htiqg55crXYuXoQRKfDBFA1WEjWgP6LHhwBZeNK1VTsfTFUHCdrfp1bgwQ9xv5ski8PX9rL2dZXvgGDnw/1'/2/*)";
vCard.bitcoin["bip47"] = "PM8TJJkFHmwP97D8CGrQPQtqgd3GJZvEt9tPewbMtYQK8R7kU65e1HMtmUSoNnkQ8u9hGGGi2sGcddacho9Q8XGp1Uvvz8oJSYrZWpoLzGmJb1sfX1tM";
vCard.bitcoin["ln_node_id"] = "https://...";
vCard.bitcoin["btc_pay"] = "https://...";
 
vCard.version = "3.0"; //can also support 2.1 and 4.0, certain versions only support certain fields
```