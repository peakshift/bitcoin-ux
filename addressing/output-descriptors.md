# Output Descriptors

## Part 1: Derivation Paths

```
m / purpose' / coin_type' / account' / change / index
```

- [**BIP 44**](https://learnmeabitcoin.com/technical/derivation-paths#bip-44-m440000): `m/44'/0'/0'` (for `1addresses`)
- [**BIP 49**](https://learnmeabitcoin.com/technical/derivation-paths#bip-49-m490000): `m/49'/0'/0'` (for `3addresses`)
- [**BIP 84**](https://learnmeabitcoin.com/technical/derivation-paths#bip-84-m840000): `m/84'/0'/0'` (for `bc1addresses`)

> You can derive up to `4294967296` children from a single extended key. The first half are for [*normal*](https://learnmeabitcoin.com/technical/extended-keys#normal-child-extended-private-key) children, and the second half are for [*hardened*](https://learnmeabitcoin.com/technical/extended-keys#hardened-child-extended-private-key) children.

- `0` - **Normal Child** (index `0`)
- `0'` - **Hardened Child** (index / starts at `2147483648`)

[1]: https://learnmeabitcoin.com/technical/derivation-paths	"Derivation Paths, How HD wallets derive keys."

