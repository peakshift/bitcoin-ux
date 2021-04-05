# Receiving bitcoin

<!--

Editor's notes

This page should cover what to do when receiving bitcoin, how to share and copy addresses etc.

- What addresses to support (native segwit by default)
- How to present QR codes (allow for specifying an amount)
- Generating a new address 

-->

Every payment starts with the receiver generating an address. When receieving bitcoin there are typically two critical parts that need to be communicated: the address, and also often the amount.

Properties of a payment request
- Address (required)
- Amount
- Contact/Observer (label who knows about the coin)
- Memo (what is the purpose)

## Payment Requests / Addresses
Do we need to consider different types of addresses?
- Example Muun, default to bech32 (v3 addresss) but allowing to fall back to legacy address.
- Describe types of secure way to send addresses when you are not in the same physical location.
- Difference between payment request and invoice / an addresss is not a payment requesst but it is a good way to describe this to a user.

:::info
There are different types of Bitcoin addresses. This can have implications for compatability when sending bitcoin. A modern wallet application is likely to use native SegWit addresses. SegWit enables cheaper transactions and other functionality. Find more information on [address types](https://bitcoin.design/guide/glossary/#address) in the glossary.
:::

## Single use / one-time addresses

There is no forced limit on how many times you can use an address, but it is critical for your privacy to use it only once per transaction. You should generate a new one everytime you need to receive some bitcoin, even if it's from an already known sender. Read more on addresss reuse and it's privacy implications in Transaction privacy.

### Dos
- ...

### Don'ts
- ...

This helps you safeguard your privacy as as reusing addresses with multiple payers will expose how you spend the change that is returned to your wallet -- they will be able to see the previous transactions including their new transaction to you.

:::info
When a payment request is created it should be stored until it is fulfilled so the user does not acciedntly share the same address to multiple persons.
:::

![](https://i.imgur.com/TpvpCQV.png)


## Sharing
Allowing the user to share in some out of band method.

### Dos
- ...

### Don'ts
- ...

:::danger
## Labeling and storing addressses and showing the payment status (excluded from v1)
- contact / observer
- memo
- keep track of things for the futrue
    - presets
- attaching receipts
- refernce perssonal finance apps
- reference to managing funds + wallet ui kit spending reports.

![](https://i.imgur.com/EMBLfZb.png)
:::

## Notifications
- Types of statuses
    - ...
- When to notify about payment status change?

![](https://i.imgur.com/BxvSAzE.png)

### Dos
- ...

### Don'ts
- ...
