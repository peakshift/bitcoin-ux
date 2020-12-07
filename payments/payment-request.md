# Payment Requests

**Payment Requests** are abstractions of addresses and other pieces of data required to carry out a payment like the amount and memo.

![payment-request-creation](assets/img/payment-request-creation.svg)

## Expirations

- BOLT11 spec states default is 3600 seconds 
  - Have not seen an application which allows expiration to be customised
  - Some implementations set it as 24 hours, and others diverge
- Merchant Payment Processors typically rely on expirations as a "protection mechanism against the volatility since it locks the cryptocurrency amount according to the bitcoin to fiat rates"[^4]

## Reusability

It does not represent an account, ~~the account will be synonymous to the wallet~~ — ideally it should only be used once.

There is no forced limit but you should only send a payment request to one payer in order to safeguard your privacy as using payment requests with multiple payers will expose your other funds to them. It should also be noted that onchain Payment Requests can have multiple payments made to them, while bitcoin lightning payment requests only accept a single payment.

## Sharing

If you share a payment request (address) with someone the natural assumption they would make is that you control the private keys to access the coins.

That person is then able to look up the address on a bitcoin blockchain explorer and see any transactions going to or from the address.

By sharing the same payment request (address) with another party you are receiving the payment from -- they will  be able to see the previous transactions including their new transaction to you.

If you share a new payment request (unused address), then they are only able to see the transcation to you. Once you spend the coins you received to that address they will also be able to see where they coins they sent you was spent.

### Given that you should always create a new payment request for each new payment. How might merchants or non profits create payment request on their websites? 

Most bitcoin wallets typically store a 12/24 word seed phrase that is able to generate billions of accounts which each further contain billions of address and their private keys.

In the past, with a basic wallet, you would generate pairs of private keys and public keys independently each time you wanted to receive some bitcoin.

This worked perfectly fine, but it meant you would need to back up your wallet every time you receive a new payment.[^1]

Seed phrases are easy to write down, even on a piece of paper and would back up all of these accounts.

#### Output Descriptors / xpub
While you should never ever share your seed phrase, or a private key for one of your accounts or addresses.

You can however share the address, or extended public key (xpub) for an account.

#### Use Cases
If you share an extended public key for one of your accounts with someone it is possible for them to generate billions of addresses without them ever being able to generate the private keys of those addresses or the private key for the account itself.

##### Online Shops
A merchant can enter an extended public key on their e-commerce software -- and every time a customer goes to checkout, a new address would be shown to them.

##### Employers
If you don't want to have to give a new address to your employer every 2 - 4 weeks for your salary, you can also share with them an xpub which they can use in their wallet to generate new addresses every time they have to pay your salary.

###### Address Reuse

*Why not just get your salary into one address?*

If you were to get your salary paid into just one address — then anytime you make a payment using funds from this address, you will be exposing all payments you received as salary.

###### What if I send a smaller amount from my daily spending wallet?

Even if you were to add hops between ... 

![payment-requests-salary-single](assets/img/payment-requests-salary-single.svg)

- [ ] Get feedback from @nothingmuch

![payment-requests-salary-multiple](assets/img/payment-requests-salary-multiple.svg)

- [ ] Get feedback from @nothingmuch

## Data Format / Presentation

A payment request should ideally be a BIP21 URI or BOLT11 lightning invoice with the `lightning:` URN. This piece of data can be represented in the following ways. [🔗 Read more](./qr-codes.md#uri-schemes)

1. Encoded String
   1. Copy pasta
2. QR Code
   1. For scanning
3. Web Link
   1. Deep linking

## Methods to transport a Payment Request

### At a distance (has contact information)

- Email
- SMS / Whatsapp
- Inside Payment App
- Phone

- Web Link (e.g. BTC Pay Server)

### At a distance (public)

- On Website
- Twitter

### Close Proximity (no contact exchange/contactless)

- NFC (Contactless Payment)
- [QR Code](./qr-codes.md)
- Print (invoice, flyer, menu)

### Close Proximity (setup required)

- Bluetooth

[^1]: https://learnmeabitcoin.com/technical/hd-wallets#single-backup "HD Wallets: Using a single seed to generate a tree of keys"
[^2]: https://learnmeabitcoin.com/technical/extended-keys "Extended Keys: Private keys and public keys that you can derive children from"
[^3]: https://blog.btcpayserver.org/payment-requests/
[^4]: https://docs.btcpayserver.org/FAQ/FAQ-Stores/#invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes