# Tips & BIPs to replicate a familiar payment experience on and off-chain

`account-identification`, `transaction-anonymity`, `fee-reductions`, `payment-requests`, `smart-contracts`, `mini-scripts`, `web3`, `schnorr-signatures`

## Abstract

The objective is to expose Bitcoin designers and wallet developers to use cases, user patterns, data structures and communication relating to payments — focusing on users in frontier and developing markets.

There are limitations in the current system that block payments — not everyone has access to bank accounts to use modern financial services like Cash App, Strike, Monzo, Visa, etc.

The process will include exploring what takes to make a complete end-to-end payment experience on Bitcoin and Lightning in a way that is familiar and seamless between the two networks, while finding ways to use these UX patterns as hooks that can maximise the use of transactions; and improve the privacy of the payment. An example would be using payment requests for Payjoins, or redirecting the change outputs to refill a lightning channel.

The output will be documentation that is between technical and visual — that aims to bridge the divide between design and developers.

## Projects

### [bed.money](https://bed.money)

When building, its offen we miss the cultural and environmental aspect of the audience that ends up using what we build. Research on Mobile Payments, Storage, Usage and Management of Money, focusing on fronteir and developing countries as they are often left out in design considerations.

- Local Adoption of Mobile Payments
- Local Access to Bitcoin & P2P Trade Volumes
- User Flows of Local Mobile Payments Services
- Personas

### anatomy of a transaction

- [ ] Tripple Entry Accounting
- [ ] UTXO / Coin Selection
- [ ] Partially Signed Bitcoin Transaction — BIP0174

### payment requests

- [ ] Payment Requests - BIP21 
- [ ] Invoices - BOLT11

### 💡 Project Ideas

- Wabisabi UX Guide
- Coinswap UX assessment

### REF

[USECASE1]: https://twitter.com/MattAhlborg/status/1293309087946506241	"LN wallet for family"

