---
layout: guide
title: Invoices
# parent: Invoices
description: Diving into the user experience of moving Bitcoin
nav_order: 30
has_children: true
permalink: /guide/invoices
main_classes: -no-top-padding
---

# Invoices & Payments

To execute a payment in bitcoin a receiver needs to provide the sender with the destination which is usually an address. On the lightning network the destination is encoded in what is called an invoice.

Aside from the standard lightning invoice, there are a number of different variations of invoices that a user can potentially send to coerce different types of transactions. These work by playing with the different primitives of an invoice to tease out certain unique types of behaviors.

We will first go over the core parts of a standard invoice, and then cover the different variations, how they are constructed and what new capabilities it adds.

---

### [Standard Invoice]({{ "/guide/invoices/standard-invoice" }})
We go into the default properties and behaviour of a lightning invoice.

---

### [HODL Invoice]({{ "/guide/invoices/hodl-invoice" }})
An invoice that is held by the recipient but not settled right away.

---

### [Keysend]({{ "/guide/invoices/keysend" }})
Payments made using the recipient node's public key instead of an invoice.

---

### [Multi-part Payments]({{ "/guide/invoices/mpp" }})
Splitting a payment across multiple routes in order to handle various routing limitations.

---

### [Lightning Offers (invoices on demand)]({{ "/guide/invoices/lightning-offers" }})
Work in progress...

---