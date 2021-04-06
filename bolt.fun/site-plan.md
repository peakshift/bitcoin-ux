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

      _Introduce basic concept of what a standard invoice is and how it works_

        - Invoice elements

            - HTLCs

            - preimage

            - tlv field

        - [Variations of invoices _(to populate...)_](/guide/invoices/variations/)

            - [The HODL Invoice](/guide/invoices/variations/hodl-invoice)

            - [Keysend](/guide/invoices/variations/keysend)

            - [Multi-part Payments](/guide/invoices/variations/mpp)

            - [Submarine swaps](/guide/invoices/variations/submarine-swap)

            - [Lightning Offers](/guide/invoices/variations/lightning-offers)

    - **Channel Management**

      ...

    - **Infrastructure**

        - Elements of a full node

          _Use LDK as guide for breaking down elements_

            - On-device full nodes

            - Remote controlled full nodes

        - Non-custodial partial node architectures

          _Introduce concept of mixing and matching arichitectural pieces, and give examples of how this is done now pre-LDK_

            - Outsourced routing

            - Outsourced ...

    - **Privacy**

      _Introducing different privacy considerations when using LN_

        - Path and network analysis techniques

        - UTXOs used for channel opens

        - Submarine swaps for toxic change

    - **OTT services**

        - LNURL (UX improvement)

        - sphinx.chat (chat over LN)
