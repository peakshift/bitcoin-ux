# Labels

Labels are essential for coin management and selection — as they allow the user to keep track of who has observed a coin in their wallet but also when they need to grok the purpose of the payment for accounting or expense tracking purposes.

- As with any payment some meta data should be stored to give context for accounting purposes
  - Who it was paid to / received from
  - What was paid for

For coin control and management the most important piece of data is the who — having your coins separated by the individaul observers.

Coin history

#### Observers

- Labels in coinjoin wallets can also be inherited, so a coin which was received from Bob, that was partially sent to Malroy would have 2 observers as both parties now know of the coin histories.

#### Memo

- Labels are also used to record other details about a payment like a reference to an invoice.

#### On-chain

Labels are not stored on on-chain, they are usually stored on the device running the wallet. So this means if a user imports their seed into another wallet it would only be able to fetch transactions and not any of the off-chain meta data— **see address discovery**.

#### Lightning

When creating a payment request, the memo on lightning is set in the description field of a BOLT11 invoice. It can also be extended with a “description_hash” to store things like an itemised list of whats being paid for typical purchase receipt.

*NOTE: BIP21 has a message parameter, but most applications do not recognise this and only read the label.*