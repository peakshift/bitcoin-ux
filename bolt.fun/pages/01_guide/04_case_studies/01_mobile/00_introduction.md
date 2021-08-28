---
layout: guide
title: Mobile
parent: Case Studies
description: Lightning App Architecture Case Studies
nav_order: 144
has_children: true
permalink: /guide/case-studies/mobile
main_classes: -no-top-padding
---

# Mobile App Case Studies

**_(Incomplete)_**

### Constraints
- Capacity
- Privacy
- iOS
- Android

### Tradeoffs
- How much can you offload while maintaining sovriegnity.
- What are you willing to give up.
- What is an acceptable trade-off for the user?
- Pheonix, for example UX is impacted as channel backups are a trade-off.
- Channel Backups.

**Notes to be developed:**

- [Comprehensive wallet comparison and architecture breakdown](https://veriphi.io/en/blog/lightning-wallet-architecture)

- [Breez](https://github.com/breez/breezmobile#architecture)

- [Phoenix](https://phoenix.acinq.co/faq#is-phoenix-a-real-lightning-node)

  - [Tradeoffs](https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e) are interesting
  - Phoenix may be using in-built Tor for iOS/Android a la [Blockstream Green](https://github.com/Blockstream/gdk/commit/796d75d7f203c0469a5519c6b9001f5d7666656d#diff-f5709bb25351aea0d5275b4dee13700611f0c12357af933cb9d76b040511b847) (find Green launch post and Phoenix [mention post](https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e))

- Muun
  - Seems similar to Phoenix; how does it differentiate ([reddit thread](https://www.reddit.com/r/Bitcoin/comments/kv7e11/announcing_muun_20_a_complete_rethinking_of_the/))?
