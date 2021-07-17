# Lightning Network App Infrastructure

Over the years as the Lighting Network developed, there have been a number of different attempts to port it's functionality to mobile devices.

The traditional way to interact with the Lightning Network was to run a Bitcoin full node with a Lightning Network node attached to it on a dedicated device. The command-line or RPC would be used to interact with the node, and sometimes a web-based tool that connects via the available APIs would be used.

This approach is very technical and was only viable in the early days of development, or now with technical folks who work around the protocol or who don't mind working through the extra steps for a more "robust" setup.

For the majority of eventual users though, much lighter and user-friendly solutions would be needed if the protocol is to be adopted broadly, and this is where we see the various attempts at implementing Lightning Network functionality on end-user devices.

The approaches we've seen to date generally fall into one of four categories:
- Full node on-device
- Partial node on-device
- Remote controlled node
- 3rd-party controlled node

The following sections go into detail on each of these four categories and eventually leads to the conclusion that the future of end-user development will likely end up moving towards approaches like what the Square Crypto team has been spearheading with the Lightning Development Kit (LDK)

### Full node on-device

The entire node lives on the device.

The user usually controls all aspects of the node, and this setup is often considered as **non-custodial**. The node may call out to certain 3rd-party services for non-core-function related needs and so privacy is sometimes traded off in this setup. The user additionally has the option to plug in their own services as the "3rd-party endpoint" to reclaim that privacy.

#### Implementations

This approach is very inefficient and is largely no longer used anymore.

E.g.:
- [Lightning Labs mobile wallet (now defunct)](https://github.com/lightninglabs/lightning-app)


### Partial node on-device

The node is decoupled so that some components live on the device and others are run as services at endpoints.

The user usually controls the funds exclusively and this setup can still be considered as **non-custodial**. Privacy is usually traded off in these sorts of setups based on which components of the node are disaggregated and in what way. Work is actively being done to improve this tradeoff in the user's favour though without giving up the efficiency gains or added functionally that comes from the disaggregation.

#### Implementations

Wallets use this approach by either building for the purpose of running a partial node on-device (Phoenix) or modifying existing node implementations to fit this purpose (e.g. Breez with lnd).

The advent of the LDK greatly improves the ease with which this approach can be taken now given how they've manage to modularise and make importable libraries out of the different components of a full node.

E.g.:
- [Breez](https://breez.technology/)
- [Muun](https://muun.com/)
- [Phoenix](https://phoenix.acinq.co/)

### Remote controlled node

The node lives entirely off the device and likely runs as a single process on a more powerful/connected piece of hardware. The device is used as an interface to control the node.

The user likely controls all aspects of the node, and this setup is usually considered as **non-custodial**. This is also one of the most private ways to interact with the Lightning Network since the user likely controls all aspects of the interactions.

#### Implementations

Mobile wallets using this approach would usually connect back to the remote node via some RPC or RESTful API interface. The wallet would simply be a UI on various API calls and responses between the wallet and the remote node.

There are also special cases where additional abstraction can be build on top of the node but still live on the remote server. Examples of this are the account models implemented by running instance of LNDHub or lnbits on top of a LN node.

E.g.:
- [Zap wallet](https://zaphq.io/)
- [Zeus LN wallet](https://zeusln.app/)
- *[Blue Wallet](https://bluewallet.io/) (pointed at user's [own LNDHub instance](https://bluewallet.io/lndhub/))

### 3rd-party controlled node

The  node is completely abstracted away from the user and the user simply interacts with some account abstraction on top of a 3rd-party service's node infrastructure.

This setup is considered as **custodial**. In this setup the user loses both privacy and robust custody (sole control) of their funds.

#### Implementations

The user simply receives an account with all the UI elements needed to interact with the Lightning Network, but none of the usual privacy/security guarantees. It is usually the easiest way to get a user up and running with the draw being quick interoperability with other Lightning Network solutions.

E.g.:
- [Wallet of Satoshi](https://www.walletofsatoshi.com/)
- *[Blue Wallet](https://bluewallet.io) (with default LNDHub settings)

### Infrastructure Approach Conclusion

When weighing the tradeoffs it seems like most serious wallet developers who are designing for mass adoption generally fall into the '**Partial node on-device**' category.

Within this category too, the approach so far has been to put in significant work to mould the pieces that each wallet's unique approach would require. With the advent of the LDK, this work may no longer be needed and we are likely to see more solutions coming up that lean more heavily of the various libraries offered by the LDK.

The rest of this document focuses on explaining the pieces of the LDK and comparing how these pieces match up to the approaches that have been taken so far in trying to decouple the different functional components that make up a Lightning Node implementation.

---

## Lightning Protocol Layers

The Lightning protocol is made up of a number of interlinking layers, much like say the TCP/IP or OSI Networking protocol models. Components of a Lightning node can span one or many of these layers and they vary in how intensely they draw on the physical resources they require. These components can also be separated into discrete processes or bundles of processes that can then communicate with each other over appropriate interfaces.

This is all to say that given this layered aproach, developers have the flexibility of unbundling the components of a Lightning node and then running them in places that make sense based on resource needs and user experience tradeoffs.

The following diagram [taken from](https://github.com/lnbook/lnbook/issues/342#issuecomment-814106423) the work-in-progress Mastering Lightning book outline the different layers of the Lightning protocol and the components that fit into these layers.

![ln-protocol-layers](assets/img/ln-protocol-layers.png)

_Diagram above as per [ln-book proposal](https://github.com/lnbook/lnbook/issues/342#issuecomment-814106423)_

**The five layers outlined, starting from the lowest layer furthest away from the end-user at the bottom are:**
1. Network Connection Layer
2. Messaging Layer
3. Peer-to-Peer Layer
4. Routing (Unreliable) Layer
5. Payment (Reliable) Layer

## The Lightning Development Kit (LDK)

The LDK is a project seeking to disaggregate all the components of a Lightning node and make them available as pluggable libraries that can be included in a wide selection of environments. It takes the approach of defining _**core components**_ that are generally standard across all implementations of Lightning nodes, and _**battery components**_ that can be customised and plugged in by the developer to express different conditions and use-cases when building a node setup.

The diagram below taken from the [LDK docs](https://lightningdevkit.org/docs/#ldk-architecture) helps detail the different components made available by the LDK.

![ldk-architecture](assets/img/ldk-architecture.svg)

---
**_(Incomplete)_**
## Mobile App Architecture Case Studies

**Notes to be developed:**
- [Comprehensive wallet comparison and architecture breakdown](https://veriphi.io/en/blog/lightning-wallet-architecture)

- [Breez](https://github.com/breez/breezmobile#architecture)

- [Phoenix](https://phoenix.acinq.co/faq#is-phoenix-a-real-lightning-node)
    - [Tradeoffs](https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e) are interesting
    - Phoenix may be using in-built Tor for iOS/Android a la [Blockstream Green](https://github.com/Blockstream/gdk/commit/796d75d7f203c0469a5519c6b9001f5d7666656d#diff-f5709bb25351aea0d5275b4dee13700611f0c12357af933cb9d76b040511b847) (find Green launch post and Phoenix [mention post](https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e))

- Muun
    - Seems similar to Phoenix; how does it differentiate ([reddit thread](https://www.reddit.com/r/Bitcoin/comments/kv7e11/announcing_muun_20_a_complete_rethinking_of_the/))?

---
**_(Incomplete)_**
## Mapping the Lightning Layers Model to LDK Architecture

A mapping of how the distinct libraries in theLDK correspond to the different components in the Lighting protocol layers model.

### LDK Non-Core Components (all batteries)

These include mostly components for interacting with the Bitcoin network level of the architecture. It mostly has to do with managing and storing UTXOs/keys. The two Lightning Network related components in this category are defining:
    - Disk I/O: how channels get stored (local storage, cloud etc)
    - TCP networking: how messages get sent along to LN peers

**Bitcoin Network based**
- **Blockchain data** (feeds into ChainMonitor)
    e.g. from Neutrino

- **Wallet**
    for on-chain UTXO management logic (display balances, create txns etc.)

- **Tx Broadcast** (Bitcoin Networking)
    for broadcasting signed txns to the Bitcoin network

- **Private key management**
    for signing txns

- **Fee estimation**
    for monitoring the mempool and suggesting sensible fees

**Lightning Infrastructure based**
- **Disk storage** (for channel state persistence)

- **LN Networking**
    ***[1. Network Connection Layer]***
    for making peer connections, facilitating peer data to and from LDK


### LDK Core Components

These include components from the Lightning Protocol stack that are responsible for interacting with the Lightning-level network and facilitating LN logic.

**Implemented components**

- **ChainMonitor**
    ***[3. Peer-to-Peer Layer]***
    Tracking one or more ChannelMonitors and using them to monitor the chain for lighting transactions that are relevant to our node, and broadcasting transactions if need be


- **ChannelManager**
    ***[3. Peer-to-Peer Layer]***
    for managing channel state; gets chain updates from ChainMonitor post-initial-sync

    - ***ChannelMonitor***
        (created by ChannelManager)
        if LDK is restarting, its channel state will need to be read from disk and fed to the ChannelManager on the next step, as well as the ChainMonitor in the following step

- **PeerManager**
    ***[3. Peer-to-Peer Layer]***
    managing peer data

- **Routing** (NetGraphMsgHandler), potential battery
    ***[5. Payment (Reliable) Layer]***
    _Note: NetworkGraph in the diagram is redundant_
    generating routes to send payments over

**Missing Components**

- **InvoiceGenerator**
    ***[2. Messaging Layer]***
    ***[5. Payment Layer]***
    for generating invoices to send along routes

- **InvoiceAcceptor**
    ***[2. Messaging Layer]***
    ***[5. Payment Layer]***
    for accepting a received invoice,,sending HTLC back along the route, and updating channel states
