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

### UTXO

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



### Transaction Fragement (PSBT)

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

- Join multiple transaction fragements together
- Combine inputs from transaction fragments with the same base

### [Output Descriptors](../addressing/output-descriptors.md)

### Labels

- As with any payment some meta data to give context
  - What was paid for
  - What was received
  - Who it was paid to
  - Who it was received from

### Coin Custers

### Coin Control

- Spending should only be from confirmed coins (see [../anatomy-psbt.md#spending])

### Batching

## User Facing
### Contacts

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