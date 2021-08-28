---
layout: guide
title: Lightning Service Providers
# parent: Guide
description: A Lightning Service Providers allow nodes to offload some capabilities to a remote service. Often times they are used for graphing and route calculation or liquidity provisioning.
nav_order: 14
has_children: true
permalink: /guide/lsp
main_classes: -no-top-padding
---

# Lightning Service Providers (LSPs)

In these sorts of setups, services are run to provide some supporting functionality needed to operate on the Lightning network. This category can also probably be considered as Lightning Service Providers (LSPs) and their services are usually targetted at self-sovereign node operators.

The types of services offered include:
- graphing and route calculation
- liquidity provisioning

The unique value offered by these services is things like the ability run a Lightning node on lower capacity devices where heavy operations are offloaded, or the ability to access required liquidity for sending/receiving on the network without having to manually provision it by themselves.


### Graphing and route calculation

Keeping up to date with the graph and efficiently calculating optimal routes can be an intensive exercise for lower capacity devices. Nodes that function as "trampoline nodes" can handle this routing for end users in setups that are trustless and private once their availability on the network is widespread enough.

Wallets like Phoenix use this technique for their graphing and routing for example.

### Liquidity provisioning

A significant channel for anyone transacting on the Lightning Network is sourcing inbound liquidity and keeping channels balanced as transactions are routed through channels.

There are a number of options that can be run as services to help with these sorts of problems:
- LSPs provide inbound liquidity at a cost (Breez, Yalls, Thor, LNBig)
- Lightning Pool offers channel leasing
- Lightning Loop and other submarine swap providers allow you to interchange between on-chain and off-chain liquidity
