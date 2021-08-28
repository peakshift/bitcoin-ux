---
layout: guide
title: Protocol Layers
parent: Architecture
description: Laying out the layers of the Lightning protocol
nav_order: 141
has_children: false
permalink: /guide/architecture/layers
main_classes: -no-top-padding
---

# Protocol Layers

The Lightning protocol is made up of a number of interlinking layers, much like say the TCP/IP or OSI Networking protocol models. Components of a Lightning node can span one or many of these layers and they vary in how intensely they draw on the physical resources they require. These components can also be separated into discrete processes or bundles of processes that can then communicate with each other over appropriate interfaces.

This is all to say that given this layered aproach, developers have the flexibility of unbundling the components of a Lightning node and then running them in places that make sense based on resource needs and user experience tradeoffs.

**The five layers we will outline, starting from the lowest layer furthest away from the end-user at the bottom are:**

1. Network Connection Layer
2. Messaging Layer
3. Peer-to-Peer Layer
4. Routing (Unreliable) Layer
5. Payment (Reliable) Layer

The following diagram [taken from](https://github.com/lnbook/lnbook/issues/342#issuecomment-814106423)[^1] the work-in-progress Mastering Lightning book outline the different layers of the Lightning protocol and the components that fit into these layers.

![ln-protocol-layers](/assets/images/ln-protocol-layers.png)

[^1]: [Diagram as per ln-book proposal](https://github.com/lnbook/lnbook/issues/342#issuecomment-814106423)