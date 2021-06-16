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

## Mapping the Lightning Layers Model to LDK Architecture

**_(Incomplete)_**

A mapping of how the distinct libraries in the LDK correspond to the different components in the Lighting protocol layers model.

### LDK Non-Core Components (all batteries)

These include mostly components for interacting with the Bitcoin network level of the architecture. It mostly has to do with managing and storing UTXOs/keys. The two Lightning Network related components in this category are defining: - Disk I/O: how channels get stored (local storage, cloud etc) - TCP networking: how messages get sent along to LN peers

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

  **_[1. Network Connection Layer]_**

  for making peer connections, facilitating peer data to and from LDK

### LDK Core Components

These include components from the Lightning Protocol stack that are responsible for interacting with the Lightning-level network and facilitating LN logic.

**Implemented components**

- **ChainMonitor**

  **_[3. Peer-to-Peer Layer]_**

  Tracking one or more ChannelMonitors and using them to monitor the chain for lighting transactions that are relevant to our node, and broadcasting transactions if need be

- **ChannelManager**

  **_[3. Peer-to-Peer Layer]_**

  for managing channel state; gets chain updates from ChainMonitor post-initial-sync

  - **_ChannelMonitor_**

    (created by ChannelManager)

    if LDK is restarting, its channel state will need to be read from disk and fed to the ChannelManager on the next step, as well as the ChainMonitor in the following step

- **PeerManager**

  **_[3. Peer-to-Peer Layer]_**

  managing peer data

- **Routing** (NetGraphMsgHandler), potential battery

  **_[5. Payment (Reliable) Layer]_**

  _Note: NetworkGraph in the diagram is redundant_

  generating routes to send payments over

**Missing Components**

- **InvoiceGenerator**

  **_[2. Messaging Layer]_**

  **_[5. Payment Layer]_**

  for generating invoices to send along routes

- **InvoiceAcceptor**

  **_[2. Messaging Layer]_**

  **_[5. Payment Layer]_**

  for accepting a received invoice,,sending HTLC back along the route, and updating channel states
