---
tags: gap-limit, account-discovery, balance, seed-phrase, bip32, bip44
---

# BIP44

Seed Phrase — HD Walet

using one seed pharse 12 or 24 words that you back up 

i dont want to have multiple addresses — 

- why?
- for identifying

## Accounts

This level splits the key space into independent user identities, so the wallet never mixes the coins across different accounts.

Users can use these accounts to organize the funds in the same fashion as bank accounts; for donation purposes (where all addresses are considered public), for saving purposes, for common expenses etc.

Accounts are numbered from index 0 in sequentially increasing manner. This number is used as child index in BIP32 derivation.

Hardened derivation is used at this level.

Software should prevent a creation of an account if a previous account does not have a transaction history (meaning none of its addresses have been used before).

Software needs to discover all used accounts after importing the seed from an external source. Such an algorithm is described in "Account discovery" chapter.

## Account Discovery

Since wallets can generate billions of addresses — 

When a recovery phrase is loaded into a wallet by default the first 20 accounts are checked for transactions. If no transaction history is found, the account is deemed empty (addresses is unused). If however an account is found to have transactions, for example on the 20th place then a scan for an additional 20 is done by the wallet — and the process is repeated until this check returns no transactions as the "gap" is empty.

### Gap Limit

BIP32 states no gaps — 

BIP44 specififies 20 accounts to be the interval.

- See Merchants/Gap Limit
- https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-March/012522.html

## Balance

The balance that is usually shown to a user in their wallet is a summation of the UXTOs that were found.

## Whats the difference between an account and an address?

They are largely synonymous.

[^1]: https://docs.btcpayserver.org/FAQ/FAQ-Wallet/#missing-payments-in-my-software-or-hardware-wallet "Missing payments in my software or hardware wallet "
[^2]: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#Account_discovery "BIP44 / Multi-Account Hierarchy for Deterministic Wallets"
[^3]: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki