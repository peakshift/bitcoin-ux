# Receiving bitcoin

<!--

Editor's notes

This page should cover what to do when receiving bitcoin, how to share and copy addresses etc.

- What addresses to support (native segwit by default)
- How to present QR codes (allow for specifying an amount)
- Always generate a new address 

-->

Starts with generating payment requests (addresses).

Properties of a payment request
- Address
- Amount
- Observer (who knows about the coin)
- Memo

## Payment Requests / Addresses
Do we need to consider different types of addresses?
- example Muun, default to bech32 (v3 addresss) allow to fall back to legacy address.
- describe types of secure way to send addresses when you are not in the same physical location.

:::info
There are different types of Bitcoin addresses. This can have implications for compatability when sending bitcoin. A modern wallet application is likely to use native SegWit addresses. SegWit enables cheaper transactions and other functionality. Find more information on [address types](https://bitcoin.design/guide/glossary/#address) in the glossary.
:::

## Single use / one-time addresses

There is no forced limit but you should only send a payment request to one payer in order to safeguard your privacy as using payment requests with multiple payers will expose your other funds to them. It should also be noted that onchain Payment Requests can have multiple payments made to them, while bitcoin lightning payment requests only accept a single payment.

By sharing the same payment request (address) with another party you are receiving the payment from -- they will  be able to see the previous transactions including their new transaction to you.

When a payment request is created it should be stored until it is fulfilled so the user does not acciedntly share the same address to multiple persons.

![](https://i.imgur.com/TpvpCQV.png)

## Storing the payment request and showing the payment status

- when you create a payment request, after its been

![](https://i.imgur.com/EMBLfZb.png)


## Notifications
- When to notify about payment status change

![](https://i.imgur.com/LIYQkpa.png)