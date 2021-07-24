---
layout: guide
title: Backend Case Studies
parent: Architecture
description: Lightning Backend Architecture Case Studies
nav_order: 145
has_children: true
permalink: /guide/architecture/backend-case-studies
main_classes: -no-top-padding
---

# Backend Architecture

**_(Incomplete)_**

Backend infrastructure to achieve different tradeoffs:
- Aggregate multiple users on shared infrastructure (they all have to trust the consensus of the infrastructure provider)
    - Custodial LN + BTC (Strike, Wallet of Satoshi)
    - custodial LN, shared custodial BTC (Galoy, BlueWallet)
    - Non-custodial LN & BTC (like Greenlight/Voltage?)

    - Why is needed:
        - general UX considerations
        - cost considerations for working with on-chain (costs aggregated)
        - high availability
        - interfacing with & proxying the traditional financial system (e.g. bank account integrations in Strike)

    - Value prop:
        - Leverages "bitcoin the network" and being able to interoperate with sending/receiving txns over Bitcoin/Lightning

    - Tradeoffs:
        - Privacy
        - Self-custody


- LSPs: No aggregation, remote services that sovereign users can consume
    - Trampoline nodes (Graphing)
    - Liquidity providers (Inbound liquidity)

    - Why is needed:
        - better UX considerations
        - accessibility of being able to run on lower end devices or in low bandwidth contexts
