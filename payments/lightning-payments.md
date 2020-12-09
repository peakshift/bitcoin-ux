## Description

The following is a general research dump on a few different aspects of payments via the Lightning Network

### 1. Notes on `key send`

- Uses “sphinx packets”?
    - https://github.com/lightningnetwork/lightning-onion/pull/40
    - https://wiki.ion.radar.tech/tech/lightning/sphinx-packet)


- Used to be called `sphinx send`
    -https://wiki.ion.radar.tech/tech/research/sphinx-send


 - `--data` flag for sending along data as well (needs `record=hexvalue`)

- tlv data records + keysend open up some interesting possibilities
    - https://twitter.com/joostjgr/status/1234896447038017537


---

### 2. Notes on `hodl invoices`


- Pretty much a normal send except the receiver holds the preimage and settles later
    - The payment is split into a "send" step (by the sender) and an "settle" step (by the receiver)
    - Limit of 483 open invoices can be routed at any given time by a node (something about on-chain transaction size limit? https://bitcoin.stackexchange.com/a/91169)

- Collection of different real-world scenarios here
    - https://github.com/lightningnetwork/lnd/pull/2022
    - https://wiki.ion.radar.tech/tech/research/hodl-invoice


- Somehow allows for keysend?
    - https://github.com/lightningnetwork/lnd/pull/2455
    - https://github.com/lightningnetwork/lnd/pull/3795


- Allows for MPP
    - https://wiki.ion.radar.tech/tech/research/hodl-invoice#atomic-multi-party-item-delivery-payment
    - https://lightning.engineering/posts/2020-05-07-mpp/
    - https://github.com/lightningnetwork/lnd/pull/3967

- Submarine swap variant
    - https://wiki.ion.radar.tech/tech/research/hodl-invoice#submarine-swap-variation


---
### 3. Notes on `submarine swaps` (automated Lightning Pool etc.)

- ...