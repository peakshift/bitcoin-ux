# Receiving bitcoin

<!--

Editor's notes

This page should cover what to do when receiving bitcoin, how to share and copy addresses etc.

- What addresses to support (native segwit by default)
- How to present QR codes (allow for specifying an amount)
- Generating a new address 

-->

Every payment starts with the receiver generating an address. When receieving bitcoin there are typically two critical parts that need to be communicated though, the address, and amount.

Properties of a payment request
- Address (required)
- Amount
- Contact/Observer (label who knows about the coin)
- Memo (what is the purpose)

---

**Payment Requests** hold the information a wallet requires to make a bitcoin payment. Whether on-chain or lightning, a payment request does not represent an account. Instead, think of it as an invoice, and ideally, recipients should only use payment requests once.

Whether you are making an On-chain or Lightning Payment, the user flow is typically the same.The receiver generates a payment request, shares it with the payer via some out-of-band method (QR code, text message, etc.), then the payer approves the payment in their wallet.

At the core, they contain the destination (address or invoice) and other pieces of data required to identify who and what is being paid for, like the amount, payer’s name, and memo.

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

---

On-chain the core of a payment request is an address. While not strictly enforced, you should recommend users only to use them once as all transactions are public. By receiving multiple payments to a single address leaks more information about the users’ funds in future transactions.

It’s also possible to have an online service generating a Payment Request on-demand, for instance, online shops that accept bitcoin. They usually have a hot wallet (see glossary), which can generate payment requests as needed for customers at checkout.

There is no forced limit, but you should only send a payment request to one payer to safeguard your privacy, as using payment requests with multiple payers will expose your other funds to them. You should also note that on-chain payment requests can have numerous payments made to them, while bitcoin Lightning Payment requests only accept a single payment, which must be paid in full.

---

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

## Notifications
- Types of statuses
    - ...
- When to notify about payment status change?

![](https://i.imgur.com/BxvSAzE.png)

### Dos
- ...

### Don'ts
- ...
