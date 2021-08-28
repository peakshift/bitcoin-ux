---
layout: guide
title: Galoy
parent: Mobile
grand_parent: Case Studies
description: Galoy
nav_order: 3
has_children: false
permalink: /guide/case-studies/mobile/galoy
main_classes: -no-top-padding
---

# Galoy

Galoy aims to be a software provider, and have entities manage their own funds. There are currently two wallets that make up the Galoy instance. Cold Storage which is using a shared multi-key setup which has the majority of the funds, while the LND instances they use a single key.

## Shared Custody

LND / Hot Wallet
- Single Key
- On a cloud server
- Goal is to have as minimal amount of funds in the hot wallet.

Cold Wallet
- Shared Custody
- With communtiy membered

Voltage.Cloud
- Does not store the operators keys