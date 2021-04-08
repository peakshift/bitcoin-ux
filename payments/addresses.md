```meta
type: page
title: Addresses
permalink: /guide/payments/address-types/
file: guide/payments/address-types.md
```

This is a good first issue for the foundations page, relating to bitcoin addresses. There will be overlap with "Payment Requests" page as a bitcoin address can also be referred to as an Invoice or Payment Request since they are one time use.

Below is a rough outline to get you going.

---

Most bitcoin wallets these days typically store a 12/24 word seed phrase that is able to generate billions of accounts which each further contain billions of address and their private keys. In the past, with a basic wallet, you would generate pairs of private keys and public keys independently each time you wanted to receive some bitcoin.

[INSERT GRAPHIC]

### Address Types

Currently there are 3 address types which are available for use on bitcoin.

| Version | Name          | Example  |                              |
| ------- | ------------- | -------- | ---------------------------- |
| 3       | Native Segwit | `bc1...` |                              |
| 2       | Segwit        | `3...`   |                              |
| 1       | Legacy        | `1...`   | Legacy bitcoin address type. |

### Address Display

### Validating
- Visually checking if the address you entered is correct. Usually done by checking the first x characters and last x. The irreversibility and amount able to be transacted onchain is 
 If we observe user behaviours when making a payment we can 

### Address Input
- ...

### Compatability

- What happens when bech32 addresses are entered in wallets that use legacy address?
- What happens when legacy addresses are inputed in native segwit wallets?

### Dos

- Show the whole address if possible to help the sender visually verify it is correct
- If space is a constraint, truncate the address in the middle so that both the beginning and end are visible

### Don'ts

### Bonus: Consider Taproot

Taproot introduces a 4th address type to bitcoin.

### REF
- ...

### Identity

#### Node Key

- Remains Static

#### Address

- Change for each payment
- No built in way to identify a user on bitcoin, feature not a bug
- Solutions BIP47
- EasyPaysy
- BNS
- Output Descriptors

