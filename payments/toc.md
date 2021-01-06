# Payments

###### RATIONALE

Below is the proposed structure for the payments section — there are first some foundations which will give readers a base to understand further chapters.

The goal with this structure is to provide the reader with a unified way of learning about bitcoin on-chain and lightning. Instead of having to navigate between separate subchapters and comparing the two - the reader is taken through a payments unified user flow. At each step, when relevant the individual considerations, implementation details and constraints are addressed for each technology.


###### FOUNDATIONS

#### [Privacy](#)

#### [Units & Symbols](#)

#### [Push & Pull Payments](#)

#### [Addresses](#)

- Types
- [Validation](#)
- [Display](#)

#### [Transaction Structure & Lifecycle](#)

- Creating a Transaction
- Funding a transaction
- Multiple Signers
- Adding Payments
- Fee
- Change
- Signing
- Filetype
- Broadcasting
- Speeding Up / Canceling
- Confirmations

#### [Lightning Invoices](#)

- Description
- Description Hash (use case: receipt)
- Amount
- Node ID
- [Validation](#)

###### USER FLOW

#### [Account Discovery & Scanning](./account-scanning.md)

- Choosing Address Type
- Selecting Account
- Gap Limit

#### [Requesting Payments](#)

- [QR Codes](#)
- [Sharing Payment Requests](#)
- [Merchants](#)

#### [Sending](#)

- [Coin Selection](#)
- [Fees & Estimations](#)
- [Broadcasting](#)
- [Speeding Up / Canceling](#)
- [Paying Merchants](#)(?)
- [Troubleshooting](#)(?)

#### [Recieving](#)

- [Pending / Confirmations](#)
- [Notifications](#)
- [Dust Attacks](#)

#### [Managing Funds](#)

- [Transaction History](#)
- [Multi Party Payments](#)
- [Spending Policies](#)

#### [Security](#)

- [Hide Balance](#)
- [Decoy Accounts](#)

