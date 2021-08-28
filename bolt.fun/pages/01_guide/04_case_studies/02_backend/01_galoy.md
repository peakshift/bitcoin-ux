---
layout: guide
title: Galoy
parent: Backend
grand_parent: Case Studies
description: Galoy
nav_order: 1
has_children: false
permalink: /guide/case-studies/backend/galoy
main_classes: -no-top-padding
---

# Galoy

They are...

## Backend setup
- bitcoind reference node
- multiple lnd nodes that can be brought up and down
- multiple users transact on single channels, currently approximates to 1,000 users per channel
- medici + mongoose (schema-interface to mongodb) for logical accounting layer

## Shared custody approach
- shared on-chain custody
- minimised balances kept in channels
- working on proof of reserves
- working toward non-custodial Lightning

## Frontend experience
- GraphQL-driven UX
