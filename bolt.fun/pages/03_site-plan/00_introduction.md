---
layout: guide
nav_order: 3
title: Site Plan
secondary_nav_title: Site Plan
description:
permalink: /site-plan/
main_nav: true
secondary_nav: true
main_classes: -no-top-padding

---

# Site Plan

The following is a high-level structure of how we would like to see this mini-site evolve. It gives some idea of our research plans and progress with that research.

---

- **Home**

  _Introduce the idea behind bolt.fun and give high-level overview of content contained_

    - [**Invoices**](/guide/invoices)

        - [Introduction & elements of an invoice](/guide/invoices)

            \> _HTLCs_

            \> _preimage_

            \> _tlv field_

        - [The HODL Invoice](/guide/invoices/variations/hodl-invoice)

        - [Keysend](/guide/invoices/variations/keysend)

        - [Multi-part Payments](/guide/invoices/variations/mpp)

        - [Lightning Offers](/guide/invoices/variations/lightning-offers)


    - [**Submarine swaps**](/guide/submarine-swaps)

        - [Introduction](/guide/submarine-swaps)

        - Lightning Loop

    - **Channel Management**

        - Introduction

            \> _Opening and closing channels_

        - Turbo channels

        - Lightning Pool

    - **Architecture**

        - Elements of a full node

          _Use LDK as guide for breaking down elements_

            \> _On-device full nodes_

            \> _Remote controlled full nodes_

        - Non-custodial partial node architectures

          _Introduce concept of mixing and matching architectural pieces, and give examples of how this is done has been done so far_

            \> _Outsourced routing_

            \> _Outsourced ..._

    - **Privacy**

      _Introducing different privacy considerations when using LN_

        - Path and network analysis techniques

        - UTXOs used for channel opens

        - Submarine swaps for toxic change

    - **OTT services**

        - LNURL (UX improvement)

        - sphinx.chat (chat over LN)

        - lnbits (account management)

        - LNHub (account management)

        - LSP (liquidity/access providers)
