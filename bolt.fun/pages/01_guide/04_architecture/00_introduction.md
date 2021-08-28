---
layout: guide
title: Architecture
# parent: Guide
description: Exploring the architecture of Lightning Network clients and nodes
nav_order: 10
has_children: true
permalink: /guide/architecture
main_classes: -no-top-padding
---

# Lightning Network Client Architectures

Over the years as the Lighting Network developed, there have been a number of different attempts to port it's functionality to mobile devices.

The traditional way to interact with the Lightning Network was to run a Bitcoin full node with a Lightning Network node attached to it on a dedicated device. The command-line or RPC would be used to interact with the node, and sometimes a web-based tool that connects via the available APIs would be used.

This approach is very technical and was only viable in the early days of development, or now with technical folks who work around the protocol or who don't mind working through the extra steps for a more "robust" setup.

For the majority of eventual users though, much lighter and user-friendly solutions would be needed if the protocol is to be adopted broadly, and this is where we see the various attempts at implementing Lightning Network functionality on end-user devices.

The approaches we've seen to date generally fall into one of four categories:

- [Full node on-device](#full-node-on-device)
- [Partial node on-device](#partial-node-on-device)
- [Remote controlled node](#remote-controlled-node)
- [3rd-party controlled node](#3rd-party-controlled-node)

The following sections go into detail on each of these four categories and eventually leads to the conclusion that the future of end-user development will likely end up moving towards approaches like what the Square Crypto team has been spearheading with the Lightning Development Kit (LDK)

## Full node on-device

The entire node lives on the device.

The user usually controls all aspects of the node, and this setup is often considered as **non-custodial**. The node may call out to certain 3rd-party services for non-core-function related needs and so privacy is sometimes traded off in this setup. The user additionally has the option to plug in their own services as the "3rd-party endpoint" to reclaim that privacy.

### Implementations

This approach is very inefficient and is largely no longer used anymore.

**Products that use this approach**

- [Lightning Labs mobile wallet (now defunct)](https://github.com/lightninglabs/lightning-app)

## Partial node on-device

The node is decoupled so that some components live on the device and others are run as services at endpoints.

The user usually controls the funds exclusively and this setup can still be considered as **non-custodial**. Privacy is usually traded off in these sorts of setups based on which components of the node are disaggregated and in what way. Work is actively being done to improve this tradeoff in the user's favour though without giving up the efficiency gains or added functionally that comes from the disaggregation.

### Implementations

Wallets use this approach by either building for the purpose of running a partial node on-device (Phoenix) or modifying existing node implementations to fit this purpose (e.g. Breez with lnd).

The advent of the LDK greatly improves the ease with which this approach can be taken now given how they've manage to modularise and make importable libraries out of the different components of a full node.

**Products that use this approach**
	
- [Breez](https://breez.technology/)
- [Muun](https://muun.com/)
- [Phoenix](https://phoenix.acinq.co/)

## Remote controlled node

The node lives entirely off the device and likely runs as a single process on a more powerful/connected piece of hardware. The device is used as an interface to control the node.

The user likely controls all aspects of the node, and this setup is usually considered as **non-custodial**. This is also one of the most private ways to interact with the Lightning Network since the user likely controls all aspects of the interactions.

### Implementations

Mobile wallets using this approach would usually connect back to the remote node via some RPC or RESTful API interface. The wallet would simply be a UI on various API calls and responses between the wallet and the remote node.

There are also special cases where additional abstraction can be build on top of the node but still live on the remote server. Examples of this are the account models implemented by running instance of LNDHub or lnbits on top of a LN node.

**Products that use this approach**

- [Zap wallet](https://zaphq.io/)
- [Zeus LN wallet](https://zeusln.app/)
- \*[Blue Wallet](https://bluewallet.io/) (pointed at user's [own LNDHub instance](https://bluewallet.io/lndhub/))

## 3rd-party controlled node

The node is completely abstracted away from the user and the user simply interacts with some account abstraction on top of a 3rd-party service's node infrastructure.

This setup is considered as **custodial**. In this setup the user loses both privacy and robust custody (sole control) of their funds.

### Implementations

The user simply receives an account with all the UI elements needed to interact with the Lightning Network, but none of the usual privacy/security guarantees. It is usually the easiest way to get a user up and running with the draw being quick interoperability with other Lightning Network solutions.

**Products that use this approach**

- [Wallet of Satoshi](https://www.walletofsatoshi.com/)
- \*[Blue Wallet](https://bluewallet.io) (with default LNDHub settings)

## Infrastructure Approach Conclusion

When weighing the tradeoffs it seems like most serious wallet developers who are designing for mass adoption generally fall into the '**Partial node on-device**' category.

Within this category too, the approach so far has been to put in significant work to mould the pieces that each wallet's unique approach would require. With the advent of the LDK, this work may no longer be needed and we are likely to see more solutions coming up that lean more heavily of the various libraries offered by the LDK.

The rest of this document focuses on explaining the pieces of the LDK and comparing how these pieces match up to the approaches that have been taken so far in trying to decouple the different functional components that make up a Lightning Node implementation.
