# Payments

There are limitations in the current financial system that make payment services inaccessible to people in many places of the world — not everyone has access to bank accounts, identification, proof of address or are in countries which support the use of modern financial services.

## Bitcoin is money

> **Getting Started / Why bitcoin is unique**
>
> The economic definition of money typically involves three specific [functions](https://en.wikipedia.org/wiki/Money#Functions) (medium of exchange, unit of account, store of value) and five [properties](https://en.wikipedia.org/wiki/Money#Properties) (durability, portability, fungibility, scarcity, divisibility, recognizability). Although bitcoin is a new breed of money, it still satisfies all of these requirements. Instead of relying on physical properties (like gold and silver) or trust in central authorities (like traditional currencies), bitcoin relies on a network of thousands of computers to enforce its mathematically defined ruleset refered to as the protocol.

## Bitcoin is Global

We are for designing the next evolution of money. One which is internet based, and global.

> **Getting Started / Why bitcoin is unique**
>
> Bitcoin can be used by anyone with an internet connection, which is available to around [53.6% of the world population](https://en.wikipedia.org/wiki/Global_Internet_usage), a number that is growing quickly. Some aspects of bitcoin, like key and address generation, even work without being online. This makes it the first truly globally available form of money that is unbound by country borders. People from around the world can freely transact without having to rely on middlemen like currency exchanges and local payment services.

## Bitcoin is extensible, it's not just a payment network

It should be noted, that bitcoin is not just a mechanism to make simple payments but it is a complete global financial infrasutructure for moving value without intermediaries. Each transaction is like a bit of code, which means it can be programmed — for example you can set various spending conditions like requiring multiple parties to agree prior funds being able to move. Its even possible to restrict funds from being moved until a certain time.

## Bitcoin is secure and accessible to all

Some people may have the perception that bitcoin is anonymous. This isn't quite accurate because all transactions are public so anyone can see the entire history of transfers that ever happened going back to the very first one on [2009-01-03](https://blockstream.info/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b).

#### Why are transactions public?

They are public so that anyone can have the ability to verify the entire history of transactions themselves. We call this a permissionless system. No one needs to ask for permission to send a transaction or to build experiences on top of bitcoin.

#### What about privacy?

Even though all transactions are stored publicly, there is no personally identifiable information attached to them. Privacy is still super important though since every time you make a payment the person receiving can see where you funded that transaction from, as you would be able to trace which address they spend those funds.

We should inform our users of these risks but also provide mechanisms that help them gain an acceptable amount of privacy[^1].

## Bitcoin is too secure for daily payments

Transactions made on-chain can take as little as 10 minutes or as much as a few days to confirm — the speed is depending on the fee you pay. This is because they get secured by the entire network of nodes and miners which exchange transactions they receive from wallets and other services with each other. Every 10 minutes (average) miners validate the payments within the transactions and publish a block. For this service, they typically take the transactions with the highest fees.

This is may not be suitable if you want to make a small payment to a vendor at your local market — but if you're making or receiving a payment from someone accross the world the benefits are made very clear as the current banking and financial system can be quite restrictive, and expensive for some.

### Lightning Payments

To meet the demands of our modern economy — movement of money needs to be borderless, secure, fast, and cheap.

The Lightning Network is part of the bitcoin ecosystem that will power this economy. It allows for near-instant payments at much lower fees. This is possible because extends bitcoin in a way that does not record each payment on-chain.

#### A Network of Payment Channels and Settlement 

If two parties want to make payments between themselves often, they can lock up some funds together in an on-chain transaction. Then they are able to bypass recording their subsequent payments with one another on-chain, by instead keeping track of each of their bitcoin balances in Lightning.

This is known as a payment channel, Lightning is essentially a network of payment channels which a sender's payment can be routed through to reach any other beneficiary.

Instead of recording each payment as an on-chain transaction to be secured in a block, they instead keep track of the balance at each side of the payment channel. The two parties only need to make a final settlement on-chain if that relationship ends and they want to "close" the channel which would unlock the balance on their side of the payment channel on-chain.

Lighting payments gains us some privacy since the payments are not individually recorded on-chain in a transaction only the final settlement is.

#### Who to open a payment channel with?

Its possible to connect two computers together to share files or even make calls between themselves without the internet — but if you want to communicate someone outside of this network you would go to a Telcom (ISP) to get a connection to the global information network. The same with lightning — you can connect to a Lightning Service Provider (LSP) which would provide you access to a larger network of payment channels, a global payment network.

## Questions

- Do my funds get locked up for every payment on lightning?
- How is lightning able to achieve such fast payments?
- When do you make an on-chian transaction?
- How often do you have to make on-chain transactions out of lightning?
- What is meant by chain (on-chain, off-chain)?

[^1]: https://bitcoin.org/en/protect-your-privacy