---
layout: guide
title: Routing
# parent: Guide
description: Routing payments through the lightning network.
nav_order: 40
has_children: false
permalink: /guide/routing
main_classes: -no-top-padding
---

# Routing

The Lightning Network is a network of nodes which are able to talk to one another and declare their payment channels. To make a Lightning payment you don’t actually need a direct channel to the party you’re sending/receiving from. With an invoice, the sender finds a route to the receiver and the payment hops from channel to channel until it reaches the destination.

It's typical for nodes to have multiple channels to get access to different parts of the network for better routing. With mass adoption, mobile partial nodes may end up with only one well connected payment channel with an LSP.

{% include tip/open.html color="blue" label="Work in progress" icon="info" %}
This page will cover path finding and the routing table size. The affects these have on low capability devices. We will also go into using intermediary nodes to hold payments if the recipient's node is offline.
{% include tip/close.html %}

<!--
## Fees

## Route Table
- Size
- What its for.

## Path Finding
- ...		

## Trampoline Payments/Routing
- Fees have to be pessimistic as the sender does not know how much the route will cost since they are not calculating the route themselves.

- https://github.com/lightningnetwork/lightning-rfc/pull/829
- https://andreneves.substack.com/p/lightning-this-week-666209
- https://www.reddit.com/r/decred/comments/ky5bk7/lightning_this_week_what_is_trampoline_routing/
- https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e
- https://stephanlivera.com/episode/142/
- https://bitcoinmagazine.com/technical/discussing-lightning-network-routing
- https://stephanlivera.com/episode/94/
- https://bitcoinops.org/en/newsletters/2021/01/06/
- https://medium.com/breez-technology/introducing-lightning-rod-2e0a40d3e44a
- https://github.com/lightningnetwork/lightning-rfc/pull/836
- https://github.com/lightningnetwork/lightning-rfc/pull/654
- https://bitcointechweekly.com/front/outsourcing-route-computation-with-trampoline-payments/
- https://medium.com/breez-technology/lightning-network-routing-privacy-and-efficiency-in-a-positive-sum-game-b8e443f50247
- https://telaviv2019.scalingbitcoin.org/files/improving-routing-in-the-lightning-network-with-trampoline-payments.pdf
-->
