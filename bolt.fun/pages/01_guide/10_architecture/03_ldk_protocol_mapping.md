---
layout: guide
title: Layers-to-LDK Mapping
parent: Architecture
description: Mapping protocol layers to their LDK counterparts
nav_order: 143
has_children: false
permalink: /guide/architecture/layers-to-ldk
main_classes: -no-top-padding
---

# Mapping the Lightning Layers Model to LDK Architecture

**_(Incomplete)_**

A mapping of how the distinct libraries in the LDK correspond to the different components in the Lighting protocol layers model.

## LDK Non-Core Components (all batteries)

These include mostly components for interacting with the Bitcoin network level of the architecture. It mostly has to do with managing and storing UTXOs/keys. The two Lightning Network related components in this category are defining:

- Disk I/O: how channels get stored (local storage, cloud etc)
- TCP networking: how messages get sent along to LN peers

### Bitcoin Network based

###### Blockchain data (feeds into ChainMonitor)
e.g. from Neutrino

###### Wallet
On-chain UTXO management logic (display balances, create transactions etc.)

###### Tx Broadcast (Bitcoin Networking)
Broadcasting of signed transactions to the Bitcoin network

###### Private key management
Signing transactions

###### Fee estimation

  for monitoring the mempool and suggesting sensible fees

### Lightning Infrastructure based

###### Disk storage
Channel state persistence

###### LN Networking
`[1. Network Connection Layer]`<br>
Making peer connections, facilitating peer data to and from LDK

## Core Components

These include components from the Lightning Protocol stack that are responsible for interacting with the Lightning-level network and facilitating LN logic.

### Implemented components

###### ChainMonitor
`[3. Peer-to-Peer Layer]`<br>
Tracking one or more ChannelMonitors and using them to monitor the chain for lighting transactions that are relevant to our node, and broadcasting transactions if need be

###### ChannelManager
`[3. Peer-to-Peer Layer]`<br>
Managing channel state; gets chain updates from ChainMonitor post-initial-sync

###### ChannelMonitor (created by ChannelManager)
If LDK is restarting, its channel state will need to be read from disk and fed to the ChannelManager on the next step, as well as the ChainMonitor in the following step

###### PeerManager
`[3. Peer-to-Peer Layer]`<br>
Managing peer data

###### Routing (NetGraphMsgHandler), potential battery
`[5. Payment (Reliable) Layer]`<br>
Generating routes to send payments over.

_Note: NetworkGraph in the diagram is redundant._ 

### Missing Components

###### InvoiceGenerator
`[2. Messaging Layer]`, `[5. Payment Layer]`<br>
Generating invoices to send along routes.

###### InvoiceAcceptor
`[2. Messaging Layer]`, `[5. Payment Layer]`<br>
Accepting a received invoice, ssending HTLC back along the route, and updating channel states.
