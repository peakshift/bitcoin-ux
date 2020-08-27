# Fees and the anatomy of partially signed bitcoin transactions

### Research

Investigate the impact of Bitcoin’s Fee on the decisions of users who are deciding to make on-chain transactions.

### Anatomy of a Transaction

`utxo`, `psbt`

A transaction can not only contain multiple payments but also other kinds of operations.

- [ ] Tripple Entry Accounting
- [ ] UTXO / Coin Selection UI
- [ ] Partially Signed Bitcoin Transaction Format — [BIP0174](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)

### Canceling transactions

- How is this handled in non-bitcoin payment services?

- e.g. [Mpesa’s Hakikisha](https://niabusiness.com/safaricom-hakikisha/)

### Slowing down to speed up

- Should long to confirm/unconfirmed transactions be encouraged?
- How does this get impacted by Replace by Fee
- The appearance of speed can be achieved if wallets show incoming mempool transactions.
- Scheduling transactions when fee’s reach a certain amount?
- Estimations/countdowns using block time

### Fee Awareness

How might we make users more aware of the current transaction fees in the UI

- Estimating Transaction Size
- How persistent should the fee be in the UI?

- Typically the fee is shown at the point a transaction is made. It’s unpredictable — and can be surprising.

- Fee Forecasting

- https://twitter.com/RajarshiMaitra/status/1263498559179063298

### Signature Aggregation Across devices

Unifying on-chain/off-chain payments using using Bolt11 as the payment request standard —  

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