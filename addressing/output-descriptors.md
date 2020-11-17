# Output Descriptors

At first you would generate a private key for each wallet you owned. It's already difficult to store 1 private key safely so a big UX improvement came about with BIP32.

> HD wallets which can be shared partially or entirely with different systems, each with or without the ability to spend coins[^3]

## Why Output Descriptors?

- [ ] [focus on xpub output descriptors, *e.g. from hardware wallets*]
- [ ] Introduction to bip32
- [ ] BIP44 derivation paths
- [ ] BIP49 derivation paths
- [ ] BIP84 derivation paths
- [ ] Obtaining an xpub

## Diving in

### Part 1: Derivation Paths

```
m / purpose' / coin_type' / account' / change / index
```

- [**BIP 44**](https://learnmeabitcoin.com/technical/derivation-paths#bip-44-m440000): `m/44'/0'/0'` (for `1addresses`)
- [**BIP 49**](https://learnmeabitcoin.com/technical/derivation-paths#bip-49-m490000): `m/49'/0'/0'` (for `3addresses`)
- [**BIP 84**](https://learnmeabitcoin.com/technical/derivation-paths#bip-84-m840000): `m/84'/0'/0'` (for `bc1addresses`)

> You can derive up to `4294967296` children from a single extended key. The first half are for [*normal*](https://learnmeabitcoin.com/technical/extended-keys#normal-child-extended-private-key) children, and the second half are for [*hardened*](https://learnmeabitcoin.com/technical/extended-keys#hardened-child-extended-private-key) children.

- `0` - **Normal Child** (index `0`)
- `0'` - **Hardened Child** (index / starts at `2147483648`)

### Part X: Obtaining an xpub

- https://github.com/bitcoin-core/HWI/blob/master/docs/examples.md

## Risks of Sharing

Do **NOT** share an xprv.

Sharing an xpub...

> If, and only if, the recipient *also* obtains a single private key from your wallet, the recipient can obtain all your private keys and steal your funds, just as if they had your xprv key.[^4]

[^1]: https://learnmeabitcoin.com/technical/derivation-paths	"Derivation Paths, How HD wallets derive keys."

[^2]: https://bitcoin.stackexchange.com/a/95595 "Deconstructed utxo output descriptor"
[^3]: https://en.bitcoin.it/wiki/BIP_0032 "BIP32"
[^4]: https://en.bitcoin.it/wiki/Deterministic_wallet_tools#Risks_of_Sharing_an_Extended_Public_Key_.28xpub.29