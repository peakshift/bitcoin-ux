# Transaction Operations

## Technical

- Transaction
- Payment Request

## Human Centered

### Primitives

- Send
- Receive

### Payments

#### Outgoing

- Gift
- Donation
- Purchase
- Savings
- Subscription
- Rebalance/Top Up Account (?)

#### Incoming

- Payment Request
- Invoice

### Money Management

- MultiSig

> first compile the miniscript to obtain bitcoin script, like the output you pasted -- this goes into the [redeem script][^redeemscripts_1] hash the redeem script create a P2SH output specifying that hash (3 address or long bc1 address)
>
> if key_1 and key_2 are the same, miniscript will compile the same redeemscript
>
> once you have a p2sh address, you just make a normal payment to it - some txn must include an output with the corresponding scriptPubKey
>
> and once that's confirmed, there's money in the multisig which can be spent by providing a scriptSig that has the signatures as well as the redeemscript
>
> usually a multisig output will look a bit different though, using OP_CHECKMULTISIG
>
> then a list of m signatures and n keys are given, and 2 numeric parameters, m and n

[^redeemscripts_1]: https://bitcoin.stackexchange.com/a/52272	"Where are P2SH full redeem scripts stored?"

