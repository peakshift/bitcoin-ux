# Bitcoin UX / Payments

## Motivation

There are limitations in the current system that make payment services inaccessible in many places in the world — not everyone has access to bank accounts, identification, proof of address or are in countries which support the use of modern financial services like Cash App, Strike, Monzo, Visa, etc.

The objective is to expose Bitcoin designers and wallet developers to use cases, user patterns, data structures and communication relating to payments — focusing on users in frontier and developing markets.

The process will include exploring what takes to make a complete end-to-end payment experience on Bitcoin and Lightning in a way that is familiar and seamless between the two networks, while finding ways to use these UX patterns as hooks that can maximise the use of transactions; and improve the privacy of the payment. An example would be using payment requests for Payjoins, or redirecting the change outputs to refill a lightning channel.

The output, is documentation and tools that is between technical and visual — which aims to bridge the divide between design and developers. Work here will be contributed back to [@BitcoinDesign/Guide](https://github.com/BitcoinDesign/Guide).

## Projects

### [Consistent Push & Pull Payments on and off-chain](consistent-payment-flow.md)

`bip21`, `psbt`,`bolt11`, `payment-request`, `keysend`

Default user flows for payments when switching between On/Offchain payments is inconsistent, this leads to users having to learn new behaviours and terminology between which does not lend itself to a seamless user experience.

- Current and Ideal User Flows
- Interactive Reference for Push & Pull Payments
- Technical Considerations

### [bed.money](https://bed.money)

`user-research`, `user-personas`, `payments`

When building, its offen we miss the cultural and environmental aspect of the audience that ends up using what we build. Research on Mobile Payments, Storage, Usage and Management of Money, focusing on fronteir and developing countries as they are often left out in design considerations. This project is to create an opensource repository of user personas and country specific information on bitcoin usage as well as problems with existing payment services available in those countries.

- Local Adoption of Mobile Payments
- Local Access to Bitcoin & P2P Trade Volumes
- User Flows of Local Mobile Payments Services
- Personas

### [WabiSabi: Design Sprints for Coinjoins and Privacy](coinjoins/design-sprints.md)

Together with [@nothingmuch](https://github.com/nothingmuch) we explore onchain payments and privacy through the lense of [WabiSabi](https://github.com/zkSNACKs/WabiSabi/blob/master/explainer.md) a coinjoin protocol in Design Sprint inspired sessions every week. The sessions aim to create Resources that allow designers to explore creative solutions of these technical topics, and are centered around a persona who realises their mental model is incomplete and is also concerned for their privacy.

- Problem Statements
- User Journey
- User Flows
- Sketches

### Bitcoin Accepted Here: Design Sprints for Merchants

Another [Design Sprint](design-sprint.md) for Bitcoin with [@pavlenex](https://github.com/pavlenex) to explore the merchant side of payments.

[USECASE1]: https://twitter.com/MattAhlborg/status/1293309087946506241	"LN wallet for family"

