---
layout: guide
title: Multi-part Payments
parent: Invoices
description: Diving into the user experience of moving Bitcoin
nav_order: 123
has_children: false
permalink: /guide/invoices/mpp
main_classes: -no-top-padding
---

# Multi-part Payments
Methods for sending multiple LN payments (HTLCs) to make up a single logical payment. The reasoning behind this is to allow for splitting a payment across multiple routes. A person could want to do this for a number of reasons including:
- to get around channel size & balance limitations
- to improve routing fee efficiency
- to improve privacy (?, more applies to AMP)

## Base AMP
An implementation of multi-part payments that has [already been accepted](https://github.com/lightningnetwork/lightning-rfc/pull/643) into BOLT-04 of the Lightning Network Spec, where:

- the recipient provides an invoice
- the sender creates a number of HTLCs and sets the same single payment hash in all HTLCs
- the recipient only settles all HTLCs when they receive all HTLCs for a given invoice
    - a discretionary decision; it is in the recipient's interest to not settle HTLCs until all have been received since settling any one of the HTLCs could serve as proof of all HTLCs being settled since they all use the same preimage. Even worse, this could also allow nodes along the route paths to steal other HTLCs before forwarding them to the final recipient if they have access to the revealed preimage from a prior HTLC
    - indicated by HTLC amounts adding up to the `total_msat` amount for the invoice
    - individual HTLCs  are treated as with HODL invoices where the HTLCs aren't immediately settled

**Implementations that support this type of payment**
- `lnd` ([PR #3967](https://github.com/lightningnetwork/lnd/pull/3967), [blogpost](https://lightning.engineering/posts/2020-05-07-mpp/))
- `c-lightning` ([PR #3809](https://github.com/ElementsProject/lightning/pull/3809))
- `eclair` ([PR #1153](https://github.com/ACINQ/eclair/pull/1153))

## Moon AMP
An implementation that seeks to improve on **Base AMP** by improving the privacy and atomicity guarantees of a given multi-path payment. The main ways it differs from Base AMP are:

- the sender creates preimages to be attached to HTLCs and uses a different preimage for each HTLC created (improves privacy); this is as opposed to Base AMP where the recipient creates a single preimage and the sender uses the same corresponding payment hash in all HTLCs that would make up the entire payment, i.e. non-interactive where the sender does not need to co-ordinate with the recipient to send a payment, but where explicit invoicing can be supported later on
- allows for more detailed spontaneous payments that can potentially replace `keysend` as a robust alternative
- allows for more robust atomicity by defining a number of fail conditions that effectively inhibit HTLC settlement until a full set of valid HTLCs is received for a given payment

**Implementations that support this type of payment**
- ...

**Described by**
- [mailing list description](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-February/000993.html)
- [Lightning Spec BOLT-04 PR](https://github.com/lightningnetwork/lightning-rfc/pull/658)
