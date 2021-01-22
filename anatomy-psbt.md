# Fees and the anatomy of partially signed bitcoin transactions

### Anatomy of a Transaction

`utxo`, `psbt`

A transaction can not only contain multiple payments but also other kinds of operations.

- [ ] Tripple Entry Accounting
- [ ] UTXO / Coin Selection UI
- [ ] Partially Signed Bitcoin Transaction Format — [BIP0174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
- [ ] [Ordering of Inputs and Outputs][^tx_ordering]

### Canceling transactions

- How is this handled in non-bitcoin payment services?
  - Mobile Money e.g. [Mpesa’s Hakikisha](https://niabusiness.com/safaricom-hakikisha/)
- Mechanism to achieve this on-chain is by using RBF (Replace by fee)
  - https://twitter.com/blockonomics_co/status/1318540752360648704
  - https://github.com/spesmilo/electrum/pull/6641#issuecomment-712689820

### Send. Slowing down to manage expectations
- Mpesa’s Hakikisha has a 5 min window for the transaction to get canceled. Bitcoin is more variable, as a transaction with a lower fee rate can take mins or hours to get a confirmation.
- On-chain fees will continue to rise.
- Should we encourange long to confirm on-chain transactions? Benefit is that the window of time to ammend a broadcasted transaction can be increased. 
- Batching payments in a low fee transaction that takes longer to confirm but is cheaper?
  - Replace by Fee can allow you to add another payment to the batch, and also speed it up.
- Scheduling transactions to be broadcasted when fee’s reach a certain amount?

#### What are the implications in commerce?
- https://github.com/btcpayserver/btcpayserver/issues/1330
- Merchants like supermarkets and restaruants in Venezuela using "cryptobuyer" seem to accept/rely on 0 confirmation transactions.

### Receive
- The appearance of faster payments can be achieved if wallets shows incoming mempool transactions.
  - UTXO should not be spendable until it is confirmed.
- Estimations/countdowns using block time(?)

#### Alternatively, Instant Payments
- Lightning network provides instant payments (also cannot be reversed, but also too fast to be canceled)

### Fee Awareness

How might we make users more aware of the current transaction fees in the UI

- Estimating Transaction Size
- How persistent should the fee be in the UI?

- Typically the fee is shown at the point a transaction is made. It’s unpredictable — and can be surprising.

- Fee Forecasting

- https://twitter.com/RajarshiMaitra/status/1263498559179063298

### Signature Aggregation Across devices

Unifying on-chain/off-chain payments using using Bolt11 as the payment request standard —  

### Research

Investigate the impact of Bitcoin’s Fee on the decisions of users who are deciding to make on-chain transactions.

### Adaptations

- How to handle payment requests communication across applications?
- Implications for users with non-lightning enabled wallets
- Privacy by default — how is the lightning wallet going to sign a fall back PayJoin transaction?
- Developer Experience / How can it be implemented without significant developer overhead to support these micro interactions / features?
- Opening and Balancing Payment Channels by hooking onto Payment Requests
- RPC combinepsbt

##### [Extending with Scripts](smart-contracts.md)

#### REF

- https://blockstream.com/2018/08/08/improving-privacy-using-pay-to-endpoint/
- https://medium.com/@nopara73/pay-to-endpoint-56eb05d3cac6
- https://samouraiwallet.com/stowaway - A smartphone wallet which implements payjoin.
- https://joinmarket.me/blog/blog/payjoin/
- https://gist.github.com/AdamISZ/4551b947789d3216bacfcb7af25e029e
- https://arkafrica.com/article/m-pesa-press-cancel-to-send/
- https://uxdesign.cc/minimizing-interactions-to-improve-customer-experience-ac6600daa4a7
- **Cost of sending money internationally from the UK** https://builtformars.co.uk/banks/international/
- https://twitter.com/murchandamus/status/1263496761106026497

[^tx_ordering]: https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki	"Lexicographical Indexing of Transaction Inputs and Outputs"

