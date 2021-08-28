---
layout: guide
title: Keysend
parent: Invoices
description: Diving into the user experience of moving Bitcoin
nav_order: 122
has_children: false
permalink: /guide/invoices/keysend
main_classes: -no-top-padding
---

# Keysend (no invoice)
The `keysend` feature is a way for a sender to send a payment to a given recipient over the Lightning Network **without first having an invoice** from the recipient to send against ([docs](https://lightning.readthedocs.io/lightning-keysend.7.html)).

The way this works is the sender first needs the **destination node id (node's public key)** for the recipient's Lightning Network node. The sender then creates a preimage and uses it to construct a keysend payment that it then forwards along an appropriate route to the recipient.

When the recipient receives the keysend payment, they would decode the payment and extract the preimage to accept the payment (resolve the HTLC). The recipient would also create an ad-hoc invoice on their end that corresponds to the payment and store it in their local invoice registry.

The recipient would usually have no way of knowing who sent the keysend payment unless the sender somehow makes this explicitly known.

This is a feature that is currently fully supported in:
- `lnd` ([PR #3795](https://github.com/lightningnetwork/lnd/pull/3795))
- `eclair` ([PR #1485](https://github.com/ACINQ/eclair/pull/1485))
- `c-lightning` ([PR #3792](https://github.com/ElementsProject/lightning/pull/3792))

_Note: Unlike when sending against a lightning invoice, if the same keysend is attempted multiple times then multiple fund transfers occur._

_`keysend` used to be previously called `sphinx send` as a reference to the [sphinx packets](https://wiki.ion.radar.tech/tech/lightning/sphinx-packet) that the Lightning Network uses to onion route packets across the network._

## Useful "additional data" mechanisms & applications

 - There is a [`--data` flag](https://api.lightning.community/#sendpayment) for sending along data as well (needs `record=hexvalue`)
    - This can potentially be used for including things like custom messages or sender info (e.g. see Whatsat's [usage of custom records](https://github.com/joostjager/whatsat/tree/b3759020e913727ef2f9661b3463a5035b6887a6#protocol))

- [Custom tlv data records](https://github.com/lightningnetwork/lnd/pull/3742) + keysend open up some interesting possibilities (see this [tlvshop](https://twitter.com/joostjgr/status/1234896447038017537) example)


## Common criticisms

**No cryptographic proof of payment for the sender**
A common concern you would hear is that the sender does not have in hand a signed invoice that matches to the preimage they would hold for the payment as there would be in a standard transaction. This means that there is technically nothing proving that the preimage was given to the recipient and settled along a route back to the sender (_see Rusty Russell's response, [tweet](https://twitter.com/rusty_twit/status/1346582657363181568) | [img](./assets/img/lightning-payments-keysend-rusty.png)_).

Not everyone agrees with this perspective though since not everyone puts the same level of importance on having this cryptographic linkage for a fulfilled payment.

> In some cases you can actually prove stronger statements with AMP than MPP. In others, you can't. TBH though w/o a formal definition of the schemes and the desired security properties, there isn't a simple answer. FWIW I don't consider invoice/preimage to be a "secure" receipt.
>
> <cite>As researched by <a href="https://twitter.com/bitconner/status/1349178391073746944">Conner Fromknecht</a> from Lightning Labs</cite>

- Alex Bosworth from Lightning Labs ([img](./assets/img/lightning-payments-keysend-alex.png))
