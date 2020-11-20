---
tags: gap-limit, account-discovery, balance, seed-phrase, bip32, bip44
---

# BIP44

## Account Discovery

When a seed is loaded into a wallet by default the first 20 accounts (addresses) are checked for transactions. If no transaction history is found, the account is deemed empty (addresses is unused). If however an account is found to have transactions, for example on the 19th place then a scan for an additional 20 is done by the wallet — and the process is repeated until this check returns no transactions as the "gap" is empty.

### Gap Limit

BIP32 states no gaps.

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