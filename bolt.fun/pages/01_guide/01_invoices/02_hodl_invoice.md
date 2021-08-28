---
layout: guide
title: HODL Invoice
parent: Invoices
description: Diving into the user experience of moving Bitcoin
nav_order: 121
has_children: false
permalink: /guide/invoices/hodl-invoice
main_classes: -no-top-padding
---

# The HODL Invoice

At a high level, a `hodl invlightning_offeroice` is an invoice that is held by the recipient but not settled right away. A `hodl invoice` can be resolved in two ways:
1. The payment is **_settled_** when the recipient releases the preimage (to the payment route)
1. The payment is **_canceled_** if the recipient does not release the preimage and the invoice expires

A `hodl invoice` works in the exact way that a standard invoice does except that, when the recipient receives the payment on a given route they do not immediately/automatically return the `preimage` back. _As a reminder, a successful payment is a 2-part process consisting of sending a payment for a given invoice along a Lightning Network route from sender to recipient and receiving the secret (preimage) for the payment back up to the route._

With a `hodl invoice` there is also an addiitonal option where the recipient **_does not_** have to be the same person _creating the payment hash for a given invoice_ they will generate (as is usually the case). They can also receive a payment hash from another party to create an invoice again where that other party would be the one that will hold the secret (preimage) for the hash until some condition is met and the secret is revealed which allows the invoice to be successfully settled.

## Scenarios ([source](https://wiki.ion.radar.tech/tech/research/hodl-invoice) & [more examples](https://github.com/lightningnetwork/lnd/pull/2022))

To help expose some of how a hodl invoice works, the following are a set of hypothetical real-world scenarios that are created by using different combinations of the elements of a hodl invoice in different ways.

The two elements that will be varying are:
- **who creates** the preimage and generates the payment hash from it for a given invoice
- **how** the preimage **gets revealed** to the final recipient/s for settlement

**Simple delay by recipient**

1. **No reveal required** (because recipient creates the preimage secret)

    This type of hodl invoice can be used to manage merchant returns for e.g where the merchant can hold the invoice for a certain return period and only settle it after the return period expires. If a return is made, the merchant simply does not settle the invoice and the funds are effectively returned to the customer.

    It can also be used in the opposite way where a recipient _does not_ settle the invoice if some condition is met. In this scenario, the hodl invoice acts as a fidelity bond of sorts for the performance of some service or action, and failure to perform that service/action leads the the recipient settling the invoice (cashing the bond)


_(All other examples below, trust not to reveal secret preimage to any other route participants)_


**Simple delay by the sender**

1. **Secret revealed out-of-band by sender**
    e.g. customer pays the invoice but holds the secret until delivery of service when it is revealed to the merchant allowing them to settle the paid invoice

1. **Secret revealed via on-chain transaction**
    e.g. submarine swap where sender must necessarily reveal the preimage when sweeping an on-chain htlc and recipient can use revealed preimage to settle invoice

    _caveat: preimage is revealed before transaction is mined. If high enough fee isn't used, recipient could potentially double-spend UTXOs involved in HTLC before HTLC can be mined_


**Chained delay by sender**

1. **Secret revealed out-of-band by sender, secret revealed via settlement to chain participants**

    In this scenario, the sender (customer) can generate a single preimage and share the resulting payment hash to multiple parties for them to make invoices from. This allows for a chained settlement of sorts where settlement of an invoice at the tip of the chain reveals he preimage progressively to other payment chain participants hwho can in turn settle their own invoices and reveal the preimage to other participants down the chain.

    An example:

    - Customer creates payment hash and gives to merchant with the caveat that they will only reveal the image to a courier on delivery of the items

    - Merchant finds a courier and shares the payment hash with them to create a service invoice that the merchant pays to the courier. The courier can only settle this invoice by successfully delivering items to the customer and receiving the preimage from them

    - On successful delivery, the courier receives the preimage from the customer (an out-of-band reveal) and settles the invoice the merchant paid them. Once this invoice is settled the preimage is naturally revealed to the merchant (revealed by invoice settlement) who can then use it to settle the invoice the customer in turn had originally paid them with

    _**Caveat:** if a path participant sits on two routes, there's a risk they can take the revealed preimage from payment of one invoice and collect settlement on the second invoice before the recipient is able to settle their hodl invoice_

## Limitations

- Limit of 483 in-flight invoices can be routed at any given time by a node ([something about on-chain transaction size limit?](https://bitcoin.stackexchange.com/a/91169))

    This is distinct from "open invoices" and only refers to invoices where the payment was started but is still incomplete, as can happen with hodl invoices
