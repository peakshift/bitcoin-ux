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

## Push vs. pull transactions
Pull Payments enable business models like subscriptions where you only need to provide your authorissation once to happen. With Pull Payments you can be charged by the merchant automatically whenever they say the payment is due.

Since you should never give anyone else your private key you will always needs to authorise any outgoing paymentss. This is called a Push Payment. No one can move your funds without having your private key. In this way Bitcoin works simmiarly to cash.

## Bitcoin Transactions
A transaction is like a small program that has a set of instructions on how to spend some bitcoin. It also needs to have the signatures by the authorised key holder.

### Input and outputs
Each transaction must be funded with some previously received bitcoin. This is known as an input. The application could allow you to manually select inputs or automatically gather enough that would cover the cost of the payment.

Outputs are synonymous to the payment you are making. They contain the payment desintation address and the amount. An output can also be the change that is returned to your wallet in the event you have funded the transaction with inputs that exceed the amount necessary for the payment.

### Transaction fee
There is no fixed fee for making a transaction and the fee rate is constantly changing. Miners also typically take transactions with the highest fees in order to maximise their profits.

Blocks are limited in size and new ones are created on average every 10 minutes. This means that if you create a transaction and want it to be confirmed in the next block there is a lot of competition to get transactions confrimed with other wallet users and services.

## Transaction life cycle
Lets break the entire payment process of down further.

### 1. Reason...
Initially somebody wants to send money to another person for some reason. It could be for a purchase, a donation, or something else.

### 2. Invoice creation
The recipient creates an invoice in their wallet application and sends it to the sender.

### 3. Transaction creation
The sender receives the invoice, creates a transaction, and broadcasts it to the bitcoin network.

### 4. Transaction processing
The transaction is in the mempool. The sender sees the transaction in their wallet as unconfirmed.

### 5. First transaction confirmation
The transaction is bundled into a block, and that first block is accepted by the network. This counts as the first confirmation.

The recipient can be pretty sure now that they will receive the bitcoin. This is a good time for the recipient to send a receipt and do other account activities.

### 6. More block are generated
Each additional block that is accepted by the network counts as an extra confirmation. When a transaction/block has 6 confirmations, it is considered final.

[^1]: https://medium.com/breez-technology/waypoints-on-the-road-to-lightnings-mass-adoption-88e4148a2c3c "Waypoints on the Road to Lightning’s Mass Adoption"

# Sending bitcoin
Bitcoin wallets don't have a balance in the conventional sense. Instead it keeps track of all the previously received [UTXOs](https://bitcoin.design/guide/glossary/#unspent-transaction-output-utxo). The balance applications usually show is actually a total of those UTXOs controled by the private key to spend.

Because of this structure, choosing to optimise for privacy, lower transaction fees, or speed are things you need to consider when designing a payment expereince. Your choice will directly impact the amount of steps the user needs to make.

You will also need to consider what enviroment the application will be used in. If you are paying a vendor at your local market you probably won't have their contact details to exchange a payment request via chat. Scanning a QR Code to get an address would likely make more sense in this situation also than manually typing it.

## Receieving a payment request

## Inputing the address
Since addresses are one time use, long, and unreadable, it is not practical for users to manually type or try to memorise. For this reason addresses or Bitcoin URIs are typically represented as a QR Code, or in plain text.

Mobile bitcoin applications often ask for camera access in order to be able to scan QR Codes. This is an effective way to transfer details required for a payment between two devices. Once the camera detects a valid address in the QR Code, it would auto fill the address once its valid.

In the event the payer and receiver are not in close proximity, have some contact with one another, for instance if they are using a text based form of communication the address or Bitcoin URI can be copied and pasted into the address field.

In the case the address is not valid, the user should be informed of such and sending should be disabled.

### Dos

- ...

### Don'ts

- ...

[INSERT PROTOTYPE OR ANIMATION: SCANNING TO INPUT ADDRESS]

[INSERT PROTOTYPE OR ANIMATION: DETECTING FROM CLIPBOARD]

[INSERT PROTOTYPE OR ANIMATION: ADDRESS VALIDATION FAIL]

## Inputting the amount to send

### Depending on your user base, 

### Allow the amount input to be denominated in bitcoin or a currency the user may be 

### There may be cases where a specific amount of bitcoin needs to be sent for a payment — in such scenario having the otion to enter a bitcoin or satoshi amount would be needed. Another scenario is that the user wants to send an amount in their local or other currency — and have that converted to bitcoin.

### Dos

- ...

### Don'ts

- ...

[INSERT PROTOTYPE OR ANIMATION: SWITCHING DENOMINATION]

## Adjusting the fee

Each transaction needs to pay a fee to miners for validation. Since miners choose the transactions with the highest fee rate (note well, a transaction with many payments do not mean it would have a )On-blockchain transactions  

#### Fast
#### Medium
#### Slow
#### Custom

## Reviewing the payment and approval

### Always take into consideration that every valid transaction which is broadcasted to the network cannot be reversed, so it is critical that the user is given a chance to double check the payment details as a final confirmation.

## Processing
## Confirmation

# Receiving bitcoin
Generating payment requests (addresses)

## Properties
- Amount
- Observer
- 

## Reusability
There is no forced limit but you should only send a payment request to one payer in order to safeguard your privacy as using payment requests with multiple payers will expose your other funds to them. It should also be noted that onchain Payment Requests can have multiple payments made to them, while bitcoin lightning payment requests only accept a single payment.

By sharing the same payment request (address) with another party you are receiving the payment from -- they will  be able to see the previous transactions including their new transaction to you.

## Exchange and proximity
### At a distance (has contact information)
### At a distance (public)
### Close proximity (no contact exchange/contactless)
### Close proximity (setup required)

When a payment request is created it should be stored until it is fulfilled so the user does not acciedntly share the same address to multiple persons.

# Transaction privacy

# Managing funds
Since there is no registry for merchants and identities, payment data tends is limited as it has to be manually inputed by the sender and reciver individually. It's not shared between the two.

We will explore some of the components required for managing Bitcoin within the application.

## Labeling

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