Different types

- Managed node **[custodial]**
    - LNURL
    - LND Hub (Blue Wallet)

- Remote node, remote control via rpc **[non-custodial]**
    - Zap

- Local node, local control **[non-custodial]**
    - [Breez](https://github.com/breez/breezmobile#architecture)/

    - [Phoenix](https://phoenix.acinq.co/faq#is-phoenix-a-real-lightning-node)
        - [Tradeoffs](https://medium.com/@ACINQ/introducing-phoenix-5c5cc76c7f9e) are interesting
        - Phoenix may be using in-built Tor for iOS/Android a la [Blockstream Green](https://github.com/Blockstream/gdk/commit/796d75d7f203c0469a5519c6b9001f5d7666656d#diff-f5709bb25351aea0d5275b4dee13700611f0c12357af933cb9d76b040511b847) (find Green launch post and Phoenix mention post)

    - [Lightning Labs prototype app](https://github.com/lightninglabs/lightning-app)

- Local partial node, local control **[non-custodial]**
    - Muun
        - Seems similar to Phoenix; how does it differentiate ([reddit thread](https://www.reddit.com/r/Bitcoin/comments/kv7e11/announcing_muun_20_a_complete_rethinking_of_the/))?
    - LDK

Kickass wallet comparison and architecture breakdown [here](https://veriphi.io/en/blog/lightning-wallet-architecture)