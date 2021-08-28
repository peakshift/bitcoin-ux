---
layout: guide
title: Invoices
# parent: Invoices
description: Diving into the user experience of moving Bitcoin
nav_order: 12
has_children: true
permalink: /guide/invoices
main_classes: -no-top-padding
---

# Invoices

To execute a payment in bitcoin a receiver needs to provide the sender with the destination which is usually an address. On the lightning network the destination is encoded in what is called an invoice.

Aside from the standard lightning invoice, there are a number of different variations of invoices that a user can potentially send to coerce different types of transactions. These work by playing with the different primitives of an invoice to tease out certain unique types of behaviors.

- [Standard Invoice](/guide/invoices/standard)
- [HODL Invoice](/guide/invoices/variations/hodl-invoice)
- [Keysend](/guide/invoices/variations/keysend)
- [Multi-part Payments](/guide/invoices/variations/mpp)
- [Lightning Offers](/guide/invoices/variations/lightning-offers)
