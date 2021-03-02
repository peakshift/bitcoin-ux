---
layout: guide
title: Payments
description: Diving into the user experience of moving bitcoin
nav_order: 4
has_children: true
permalink: /guide/payments/
---

# Payments and transactions

At its core, the bitcoin protocol enables transactions between people without middlemen, regardless of where in the world they are. 

This chapter is meant to give an overview of bitcoin transactions, including sending, receiving and transaction privacy with advice and best practices. After this chapter, you should be able to design payment solutions that are well suited to your product’s use case, and understand best-practices for the implementation of it.

We have already established that [Bitcoin is money](https://bitcoin.design/guide/getting-started/why-bitcoin-is-unique/#its-money-but-digital), so let's dive into how it can be used to facilitate payments.

---

#### [Transactions overview](#Transactions-overview1)
(Perhaps these descriptions are unnecessary //Alexa)
An overview of bitcoin payments, common concepts and the transaction lifecycle.

#### [Sending bitcoin](#Sending-bitcoin1)

An introduction to how sending bitcoin works.

#### [Receiving bitcoin](/guide/payments/receive)

An introduction to how receiving and requesting bitcoin works.

#### [Transaction privacy](/guide/payments/privacy)

An overview of how to help users maintain their financial privacy while using bitcoin.

#### [Managing funds](/guide/payments/manage-funds)

How to help users organize and manage their transaction data and holdings.

#### [Case studies](#Case-Studies--Sending-bitcoin)

We demonstrate how the conecpts we've learned can be put together to create a payment expereince.

# Transactions overview

Bitcoin is a peer-to-peer push-payment system. This means that you are able to send, or *push*, bitcoin to any address at your will, at any time, without passing through a third party.

This is radically different from the legacy financial system where it is often possible for others to *pull* and withdraw money from your account (utility companies, financial institutions, merchants etc.). When you make a payment it will pass through systems that might delay, control or block the payment. 

## Bitcoin transactions

The most common bitcoin transactions simply contain instructions to move funds from one address to another. Other types of transactions include creating multi-sig wallets or recording data on the blockchain.

Once created, a transaction needs to be signed with the private key(s) of the sender(s), submitted to a node on the network for validation and propagation to other nodes. It then waits to be verified and included in a newly mined block, after which point it will be recorded on the blockchain. For this service, the sender will pay a fee for every transaction which goes to the node who mined the block as a reward.

Technically, the transaction is data that contains the necessary information to execute on the blockcain. The principal properties are:

- Inputs - the source(s)
- Outputs - the destination(s)
- Input counter - the number of sources
- Output counter - the number of destinations
- Version - the code version this transaction follows
- Lock time - time until the transaction should be executed, optional

### Input and outputs

In a Bitcoin wallet, funds are often not held in a single address, but more commonly in one address per transaction where you received bitcoin. When you are making a transaction you need to specify which of your addresses should be the source of the funds. If you need to spend more than what a single address holds, you can  several. These are called *inputs* to the transaction.

Likewise, you need to  the destination address, or addresses for the transaction. These are called *outputs*. Should there be more bitcoin in the inputs than are needed for the transaction, a new address will be created in your wallet for the change, often called a *change output*.

The bitcoin you use in a payment can leak information to the previous entities you have received payments from. Because of this structure, choosing to optimise for privacy, lower transaction fees, or speed are things you need to consider when designing a payment expereince.

### Transaction fee

Every transaction needs to pay a fee to be executed, which incentivises miners to include it in a block. There is no fixed fee for making a transaction as it depends on the amount of data it includes, the amount of other transactions that are trying to get verified, and how much each submitter is prepared to pay at any given time. Miners typically pick the transactions that will earn them the highest reward to include in a block if they are successful.

Blocks are limited in size and new ones are created on average every 10 minutes. This means that if you want a transaction to be confirmed in the next block you might have to pay a high price. 

When submitting a transaction you can optimize for fast confirmation, or lower fee. It is common to give some control of this to the user.

## Transaction lifecycle

Let's break the entire payment process of down further.

### 1. Reason...

Initially somebody wants to send money to another person for some reason. It could be for a purchase, a donation, or something else.

### 2. Invoice creation

The recipient creates an address in their wallet application and sends it to the sender.

### 3. Transaction creation

User enters the amount, the reccipeints address and sometimes sets the fee themselves — this is the required information a wallet application needs to construct a transaction.

### 4. Transaction signing

The sender receives the invoice, creates a transaction, and broadcasts it to the bitcoin network.

### 5. Transaction broadcast

… 

### 6. Transaction validation

...

### 7. Transaction propagation

The transaction is in the mempool ("?" //Alexa). The sender sees the transaction in their wallet as unconfirmed.

### 8. Transaction verification

...

### 5. First transaction confirmation

The transaction is bundled into a block, and that first block is accepted by the network. This counts as the first confirmation.

The recipient can be pretty sure now that they will receive the bitcoin. This is a good time for the recipient to send a receipt and do other account activities.

### 6. More block are generated

Each additional block that is accepted by the network counts as an extra confirmation. When a transaction/block has 6 confirmations, it is considered final.

# Sending bitcoin

One of the most common actions someone using your application would make is sending bitcoin. They may be making a payment to a retailer, sending bitcoin to a known contact, or moving it between their own wallets. Whomever the bitcoin is getting sent to, there are some specific considerations that an interface need to accommodate.

mention 

- Day-to-day spending [#](https://bitcoin.design/guide/getting-started/personal-finance/#day-to-day-spending)
  - From a portability perspective, many of these payments happen outside of our homes. This makes mobile wallet applications ideally suited, which allow us to take advantage of the unique benefits of smartphones
  - Convenient camera access allows for quick scanning of QR payment code and NFC support ([Near-Field Communication](https://en.wikipedia.org/wiki/Near-field_communication)) lets us pay just by holding our phone next to a card reader

## Get an address from the receiver
The first requirement of sending bitcoin is knowing the desintation to send the funds to. The receiver of the payment needs to generate an address in their wallet and share with the sender. Since addresses are one time use, long, and unreadable it is usually communicated in plain text as an [address](https://bitcoin.design/guide/glossary/#address), or [payment link](https://bitcoin.design/guide/foundations/wallet-interoperability/#payment-links) which can be copy and pasted. It can also be presetned as a scannable [QR Code](https://bitcoin.design/guide/foundations/wallet-interoperability/#qr-codes) which is typical when in close proximity and the two parites do not have another communication method to exchange the address.

## Inputing the address

The address should be copied or scanned to avoid mistakes, because as we learned the [push payments](#) structure of bitcoin prevent you from being able to retrieve the funds yourself once sent. If address is not valid, the user should be informed of such and sending should be disabled. You would have to explicitly request the receiver to return the bitcoin, and if its gets accidentally sent to an unknown entities address you can consider retrieving the bitcoin an impossible task.

#### QR Code

Mobile bitcoin applications often ask for camera access in order to be able to scan QR Codes. This is an effective way to transfer details required for a payment between two devices. Once the camera detects a valid address in the QR Code, it would auto fill the address if its valid.

#### Copy Paste

Since QR Codes are more suitable to exchange information between devices that are in close proximity to one another, when the only means of exchanging an address is through chat or email the user will need to paste it into the address field.

:::info
Once the user switches to your wallet application from the one they copied the address or payment link from, it's possible to auto-detect the contents of the devices clipboard then paste into the address field. While some users may find this convienent, others may prefer to disable this so you should consider giving them that option.
:::

### Dos

- Indicate clearly if the address is invalid

### Don'ts

- Allow a transaction to be sent if the address is invalid

[INSERT PROTOTYPE OR ANIMATION: SCANNING TO INPUT ADDRESS]

[INSERT PROTOTYPE OR ANIMATION: DETECTING FROM CLIPBOARD]

[INSERT PROTOTYPE OR ANIMATION: ADDRESS VALIDATION FAIL]

## Inputing the amount to send

- bitcoin — standard
- sats — deeper knowledge about bitcoin denominations
- local currency — more familiar, if something is priced in their local currency, typical for a purchase

Payment links and QR Codes can contain an amount —when they do, once scanned, or pasted

Depending on their familiarity with bitcoin, your users may have a preference to transact with a bitcoin denomination as the standard in the application, or another preferred currency.

Allowing the amount to be inputed in different bitcoin denominations, or the user's preferred currency should be readily available.

Read more about changing units contextually on [Units, symbols and amount display](https://deploy-preview-63--sad-borg-390916.netlify.app/guide/payments/units-and-symbols/).

### Dos

- ...

### Don'ts

- ...

[INSERT PROTOTYPE OR ANIMATION: SWITCHING DENOMINATION]

## Transaction fee

### Fee Estimation

Fee estimations are largly inaccurate — this is because the fee rate is impacted by everyone else who are trying to get their transactions into a block. The rate is constantly changing so it is difficult to make an accurate prediction of 

The fee recomendation in your application can cause senders to end up over paying in fees, or wait long periods of time to get their traansactions confirmed.

#### Selecting the fee-rate

The application can automatically estimate a fee and set it for the sender which would prioritise the transaction to be included in a block as soon as possible. Since the fee rate may vary if there is high demand for  you can present senders with more fine grained fee controls so they can set the priority of when the transaction is confirmed themselves. 

Whichever method you use, it is important that the amount that will be paid is communicated clearly. 

### Total fee vs fee rate

Since the fee is dependent on the actual transaction size, 

Sats per byte for beginner users may be confusing

Typically the options of fast, medium, slow, custom

Sats per byte for beginner users may be confusing.

### Dos

- ...

### Don'ts

- ...

## Reviewing the payment and approval

Always take into consideration that every valid transaction which is broadcasted to the network cannot be reversed, so it is critical that the sender is given a chance to double check the payment details as a final confirmation.

## Processing

Once a transaction has been broadcasted, depending on the fee paid … [UNCONFIRMED STATE]

## Confirmation

Once the transaction containing the payment has been mined, the user should be notified … 

# Receiving bitcoin

Generating payment requests (addresses)

Do we need to consider different types of addresses?
Memos etc.

## Receieving a payment request
...

## Properties

- Amount
- Observer
- 

## Single use / one-time addresses

There is no forced limit but you should only send a payment request to one payer in order to safeguard your privacy as using payment requests with multiple payers will expose your other funds to them. It should also be noted that onchain Payment Requests can have multiple payments made to them, while bitcoin lightning payment requests only accept a single payment.

By sharing the same payment request (address) with another party you are receiving the payment from -- they will  be able to see the previous transactions including their new transaction to you.

When a payment request is created it should be stored until it is fulfilled so the user does not acciedntly share the same address to multiple persons.

# Transaction privacy

- It becomes more important to quickly execute a transaction than protecting the money involved from as many attack vectors as possible

# Managing funds

Since there is no registry for merchants and identities, payment data tends is limited as it has to be manually inputed by the sender and reciver individually. It's not shared between the two.

We will explore some of the components required for managing Bitcoin within the application.

## Labeling

## Transaction History

- Showing UTXOs
- Showing Transactions containing the UTXOs

# Case Studies / Sending bitcoin

Bitcoin wallets don't have a balance in the conventional sense. Instead it keeps track of all the previously received [UTXOs](https://bitcoin.design/guide/glossary/#unspent-transaction-output-utxo). The balance applications usually show is actually a total of those UTXOs available to spend.

Choosing if you are optimising for privacy, lower transaction fees, or speed are things you also need to factor into the design into the payment expereince. Your choice will directly impact the amount of steps the user needs to make.

You will also need to consider what enviroment the application will be used in. If you are paying a vendor at your local market you probably won't have their contact details to exchange a payment request via chat. Scanning a QR Code to get an address would likely make more sense in this situation also than manually typing it.

## Simple send

### How it works 

Usually on a send screen, the user enters an amount they wish to send, then pastes in the address where they want to direct the payment to.

The application can sometimes detect if an address has been copied to the clipboard and automatically paste it into the address field.

### Pros

- Low friction, it easy for end user, as they don't have to select coins to fund the transaction with manually.
- Wallets can decide automatically if to optimise the transaction for cost, speed, or the change that would be returned depending on the targeted user group.

### Cons

- Does not provide the level of control for more privacy concious users.

### Best practices

#### When to use

- New Users or introductory wallets
- Wallets that wish to prioritise cost or transaction speed

#### When not to use

- When privacy is a concern to users

#### Products that use this scheme

- Bread Wallet + Electrum (FIFO)
- Mycelium (Pruned FIFO)
- BitcoinJ and Bitcoin Wallet for Android (High Priority First)
- Electrum *Private Mode (Target Sized Change)
- Bitcoin Core (Branch and Bound)
- Hexa (Blackjack, with Accumulative Fallback)

## Manually selecting coins to fund a transaction

With manual coin selection the 

### How it works

### Best practices