# Forced Address Reuse

> When an adversary pays an (often small) amount of bitcoin to [addresses](https://en.bitcoin.it/wiki/Address) that have already been used on the [block chain](https://en.bitcoin.it/wiki/Block_chain). The adversary hopes that users or their wallet software will use the payments as inputs to a larger transaction which will reveal other addresses via the the [common-input-ownership heuristic](https://en.bitcoin.it/wiki/Common-input-ownership_heuristic). These payments can be understood as a way to coerce the address owner into unintentional [address reuse](https://en.bitcoin.it/wiki/Address_reuse)

### Dust Attack

> *I disagree with the use of the phrase "dust attack". Because in bitcoin the term "dust" is also used for very low valued UTXOs (for example 1 satoshi) which are uneconomic to spend. If a "dust attack" actually used "dust" then the attack would fail, because no wallet would actually spend the uneconomic UTXOs.*
>
> — [source](https://github.com/JoinMarket-Org/joinmarket-clientserver/pull/471#issuecomment-565857814)

## User Interface

### How is this reflected in the user interface?

In the wallet, this sould create a cluster of coins, or flagged as "address-reused".

```gherkin
Scenario: Potential address reuse attack
	Given "bc1…0" has only received "1" transaction
	And the transaction has "3" outputs directed to "bc1…0"
	And the total value is "300000" sats
	When "bc1…0" receives a transaction from "bc1…1"
	And the transaction has "1" outputs directed to "bc1…0"
	And the total value is "10000" sats
	Then I go to "Coin List"
	And I see a cluster of coins at "bc1…0" flagged as "address-reused"
	And the "4" utxos in that cluster need to be mixed
```



[1]: https://en.bitcoin.it/wiki/Privacy#Forced_address_reuse	"Bitcoin Wiki — Privacy"

