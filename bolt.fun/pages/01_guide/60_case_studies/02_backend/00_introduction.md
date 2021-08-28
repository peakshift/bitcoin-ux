---
layout: guide
title: Backend
parent: Case Studies
description: Lightning Backend Architecture Case Studies
nav_order: 145
has_children: true
permalink: /guide/case-studies/backend
main_classes: -no-top-padding
---

# Backend Architecture

The pure Lightning Network experience is defined by a user running their own full node and Lightning client on a dedicated server, and managing their own channel opens/closes and balancing on that client. This sort of setup gets you fairly robust privacy and full self-custody, but it comes at the steep cost of being interested enough to want to manage a node, and capable enough to set it up and maintain it for the life of its usage.

This is a high bar for the majority of users that we would eventually like to see start using the Lightning Network, and out of necessity different compromises can be made to improve accessibility, usability and unique features enabled by Lightning.

These tradeoffs take into consideration things like:
- user device capability
- UTXO scalability
- ease of onboarding
- responsibility for safeguarding of funds
- liquidity management
- interfacing with the traditional financial system

Persons looking to build user products and experiences around Lightning can choose to optimize around these different tradeoffs when designing their intended solutions for their users. By optimising around these, what we end up with are a few distinct categories of Lightning service setups on the backend. These all generally tend to fall into two categories:
- User aggregation on shared infrastructure
- Remote services for self-sovereign node operators

## User aggregation
In these sorts of setups, groups of users are pooled share certain pieces of infrastructure to help scale their experience, improve usability and reduce barriers to entry. What this ends up looking like is services that are:
- full custodial
- shared custodial
- non-custodial

### Full custodial

In this setup users are given a logical account on the service providers system but have no visibility or autonomous control on the underlying bitcoin held. The first advantage of these setups is that users have absolutely no responsibility for maintaining or securing funds and liquidity. The value proposition of this approach is simply interoperability with the Lightning protocol, but what is given up is sovereignty and privacy. With the continued improvements to other partial and non-custodial options available, many would see these tradeoffs here as not worth it for what you get. Examples of this sort of setup include Wallet of Satoshi.

Another angle on full custodial setups are when they are paired with some extra-network value offering. Strike for example runs a custodial system, but they are tightly coupled with the traditional financial system and can facilitate the seamless movement of fiat held in accounts to persons either in the same jurisdiction or across borders. By using the Lightning Network to do this, they are able to offer fiat transfer services at a fraction of both the cost and speed that these would usually carry.

Exchanges that support Lightning can also be considered full custodial, where their unique value offering is market liquidity for being able to trade bitcoin and move it from and back to fiat.

### Shared custodial

This is a variation of full custodial setups where the services seek to distribute custody risk by splitting up the custody of funds across a number of parties.

These sort of services are usually open source as well and have options where users can run their own community custodial setups for small groups of family, friends or their local communities. Examples of this type of setup are things like Galoy Money and BlueWallet's LndHub.

### Non-custodial

With this variation, users can provide their own keys to access and secure funds, but all infrastructure is run by the service. In these cases, the users maintain custodial sovereignty and interoperability with the network, and what they give up are privacy and the ability to enforce the consensus rules their transactions follow.

Examples of this include Blockstream's Greenlight.
