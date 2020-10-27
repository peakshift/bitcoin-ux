# Coinjoins & Privacy UX Primer

- Bitcoin is not anonymous.
- Consider each address you generate as a new identity.
- Coin has history
- Histories can link addresses into clusters
- Public ledger
- Anyone can lookup
- New users may not be aware

## Address Reuse

Use a [hierarchical deterministic wallet](https://en.bitcoin.it/wiki/Deterministic_wallet) in order to avoid reusing an identity.

Practicality

- How do you adverise an address to be paid in a video?

## Wallet Fingerprinting

The way the transaction is constructed can give chain analysts an idea of which wallet was used.

1. Change is sometimes the last output
   1. Solutions
      1. Lexicographical Ordering
2. If the timelock in the transaction is a specific amount

## Routing Transaction

- Should use Tor
  - Research Dandelion
- If an attacker has enough nodes in the network it can determine the location of where the transaction was broadcasted.

## Methods

### Coinswap

Privacy through a swap for another users coin history.

### Coinjoins

Privacy by combining of coin history.

#### Censoring

- Some exchanges may not accept deposits from coinjoins
- Adding hops — *see Samourai Wallet's Ricochet*

#### Components

##### Rounds

- Role of the coordinatior

##### Coin Selection

- Post-mix wallet MUST prevent joining inputs together. [cite_1]

---

#### Techniques

Types of coinjoin techniques...

##### Equal Output Coinjoin

- All parties mix the same output denominations

##### PayJoin

A type of coinjoin which involves two parties adding their inputs, and outputs on the same transaction so the direction of payment cannot be determined.

- is not obviously visible as an equal-output [CoinJoin](https://en.bitcoin.it/wiki/CoinJoin)

> If PayJoin [transactions](https://en.bitcoin.it/wiki/Transaction) became even moderately used then it would make the [common-input-ownership heuristic](https://en.bitcoin.it/wiki/Common-input-ownership_heuristic) be completely flawed in practice. As they are undetectable we wouldn't even know whether they are being used today. As [Transaction surveillance companies](https://en.bitcoin.it/wiki/Transaction_surveillance_company) mostly depend on that heuristic, as of 2019 there is great excitement about the PayJoin idea.

[1]: https://github.com/nopara73/ZeroLink#i-introduction
[2]: https://zmnscpxj.github.io/bitcoin/coinjoinxt.html
