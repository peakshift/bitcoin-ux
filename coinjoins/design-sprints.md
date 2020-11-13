# Design Sprints for Coinjoins and Privacy

![design-sprint-0](assets/img/design-sprint-0.jpg)

— [view live version](https://miro.com/app/board/o9J_knmJ_C0=/)

## Introduction

This all started with a question @nothingmuch posted about amount organisation in the Bitcoin Design Slack - and it has lead us down its own rabbit hole of exploring use cases and user flows private payments together.

Interacting with bitcoin privately at this point in time demands a large amount of technical know how. The interfaces and design patterns used are also technically driven, causing a steep learning curve for users.

Coinjoins are also a heavily technical topic for designers right now, and its taken a lot to gain just a rudimentary understanding of the UI components that are necessary for users to interact with it.

The challenge became to explore solutions to aid the transition form early adopters, and technical folks to a wider mainstream user base.

Sprint Question: *How might we increase adoption of bitcoin, in a safe way?*

The output is NOT a set of recommendations, none of this has been tested with users. The aim is to deconstruct the technical and user facing aspects of coinjoins for designers so that they can come up with their own design solutions while understanding the privacy implications.

## Principals

### Familiarity
Using familiar patterns and analogies we can allow new users to begin interacting faster, and gradually grow their bitcoin knowledge — not having to learn too many things upfront and risk being overwhelmed and eventually give up before they even start.

### Empathy

- User is educated through the software, so they can slowly develop confidence by gaining experience.
- Be against dumbing things down, instead aim to make bitcoin understandable.
- Grow with the user. Not everyone is an expert, and even experts at one point in time are beginners.

### Truthfulness

Be truthful to bitcoin.

You are not given privacy when interacting onchain — the perception of this could lead to bad consequences for users who are unaware and require such.

Be true to the principals of bitcoin and display that honestly. Be truthful to the user. They should know they are using bitcoin, but not distracted by it when they need to complete a task.

- *e.g. of not being truthful. Most wallets have a total balance and you spend out of the balance, but thats not how bitcoin works.*
- Help users learn what a UTXO is, not imediatly but over time.
- Give them choice.

### Consistency

Create a consistent visual language for simmilar objects, especially in the case when new concepts are being introduced to the user (*e.g. UTXOs*).

## Persona

As this was an exploritory process which relied on expert interviews, we did not set time for user research (which would always be ideal).

| Casual User                                                  |
| ------------------------------------------------------------ |
| Has bitcoin                                                  |
| Buys bitcoin and spends it but doesn't often receive it except exchange withdrawals |
| Does not understand UTXOs, thinks they just have a balance   |
| Realises their mental model is incomplete and is concerned for their privacy |
| Willing to spend time and money to improve their privacy     |
| Not technical but motivated to learn                         |
| Does not know what a coinjoin is                             |
| Just got a ColdCard hardware wallet and wants to move funds to it |

👆 *feedback from Wasabi*

- [INSERT HERE]

## Happy Path

- [ ] INSERT USER FLOW

## Technical Concepts

### Coin (UTXO)

```json
[
    ...,
    {
        txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        vout: 0,
        address: "bc...",
        label: "",
        scriptPubKey: "00...",
        amount: 50,
        confirmations: 0,
        spendable: true,
        solvable: true,
        desc: "wpkh([2fa047bc/0'/0'/3']02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9)#t7as4qks",
        safe: true
    }
]
```

### Transactions

- …

### Transaction Fragment (PSBT)

- [ ] What is a transaction fragment?
- [ ] What parts are relevant to designers?

#### Data Structure

1. **Input**
   - Previous Transaction ID
   - Index
   - Signature
2. **Output**
   - Value
   - Public Key
3. **Locktime** `(numeric, optional, default=0)`
   *Raw locktime. Non-0 value also locktime-activates inputs*
4. **Replaceable**  `(boolean, optional, default=false)`
   *Marks this transaction as BIP125 replaceable.*

#### Actions

- Add Inputs
- Add Outputs
- Sign
- Check Replace by fee

#### Actions after Creation

- Join multiple transaction fragments together
- Combine inputs from transaction fragments with the same base

### [Output Descriptors](../addressing/output-descriptors.md)

### Labels

Labels are essential for coin management and selection — as they allow the user to keep track of who has observed a coin in their wallet but also when they need to grok the purpose of the payment for accounting or expense tracking purposes.

- As with any payment some meta data should be stored to give context for accounting purposes
  - Who it was paid to / received from
  - What was paid for

##### On-chain

Labels are not stored on on-chain, they are usually stored on the device running the wallet. So this means if a user imports their seed into another wallet it would only be able to fetch transactions and not any of the off-chain meta data — **see address discovery**.

#### Lightning

This meta data on lightning is set in a description field of a BOLT11 invoice. These invoices are stores

*NOTE: BIP21 has a message parameter, but most applications do not recognise this and only read the label.*

#### Observers

- Labels in coinjoin wallets can also be inheirted, so a coin which was received from Bob, that was partially sent to Malroy would have 2 observers as both parties now know of the coin histories.

#### Memo

- Labels are also used to record other details about a payment like a reference to an invoice.

### Rounds

- ...

### Toxic Change

- With fixed denomination coinjoins, you sometimes end up with change that is too small to be mixed in a round.
- This change poses a problem because if you were to spend it, you will **decrease your privacy** because the transactions that created the change will now be linked. Note that this is also true if you mix your change with a mixed coin.

### Coin Control

- Spending should only be from confirmed coins (see [../anatomy-psbt.md#spending])

### Coin Custers

### Batching

Operations which are essentially Transaction Fragments can be added to a queue to be broadcasted at an optimal time. Optimal time being determined by the wallet + user setting for that operation. For instance when fee's are lower or when a round is about to start.

## User Facing
### Contacts

Wasabi Wallet developers have noted that they had difficulty communicating to its users how to properly use labels. The coin join application relys heavily on manual coin selection in its user flows. 

#### Extensibility

Besides addresses and output descriptors which would be used for onchain payments, contacts can be used to store

### Payment Request

- Amount from memo
- Schedule for mixing
  - Defaults should be looked at

### Send Payment

- Coin control is too complex for users 

### Coins

- How do coins interact with one another

### Pending Items

Constraints on mobile — 

- Review your pending operations
  - Coin join registrations
  - Payment Requests
    - Scheduled for mixing
  - Unconfirmed Payments
    - Receiving
    - Sending
- On mobile, a user may have to be prompted to open the application if they have registered to coinjoin in a round.

### Wallet Defaults

- Auto Coin Join

## Continuity Plan

- Reach out to Max, Magnus, and others interested in coin control
- Next steps...

---

## TODO

- [x] State the Design Principals
- [ ] Explain the Technical Concepts
- [ ] Explain the User Facing design discoveries
- [ ] Design visual prototypes to illustrate some of the learnings
- [ ] Continuity Plan
- [ ] 10min video walk-through of Miro board

[^1]: 

