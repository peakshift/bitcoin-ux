- # Wallet to Wallet Communication

  *Direct P2P connection between sender and receiver wallets.*

  ---

  Payments in bitcoin can be very straight forward when you are moving funds between your own wallets, on your own devices. Transport methods like QR Codes, and SD Cards can be used to exchange `.psbt` files, keys and addresses.

  When it comes to coordination of bitcoin payments that require any kind of collaboration things can be quite cumbersome though.

  Use cases;

  - Creating multisig
  - Paying from multisig
  - Payjoin
  - Coinjoin
  - Opening Channels

  There is also heavy emphasis payment protocols tend to have on the consumer/merchant interactions. They assume the merchant has a server which is always online to handle payment processing.

  What if we could enable mobile wallets to talk to one another, in a privacy preserving way?

  ## Implementation methods

  ### 1. Tor Hidden Services

  A mobile application which has Tor capability is able to startup a local server, and expose it to the world through a Tor hidden service. Any other bitcoin wallet with a Tor client is able to connect to it and make requests.

  #### Implementation Details — Tor Hidden Services

  When you create a hidden service on mobile the following happens.

  - local http server has to be setup in the app
  - private key is created for the hidden service (where to store?)
  - The public key is used as the onion address
  - Usually the private key is destroyed, but can be persisted in some other storage.

  #### Constraints

  ##### Mobile

  - This can potentially serve as a contacts identifier
  - On ios Tor can only run for 20 seconds in the background if the app is closed.
  - The user has to keep the app open.

  ##### General

  - May need a rendevous server
  - Incentivisation

  

  ## 2. Keysend

  - see bolt.fun/lightning/invoices/keysend

  #### Constraints

  - Is not metadata resistant

  

  ## 3. Cwtch

  https://git.openprivacy.ca/cwtch.im/cwtch

  

  ## NOTES

  - [ ] Research Friends list BIP47 (paynims)

  ###### REF

  - https://github.com/zksnacks/Meta/issues/23
  - Breez Wallet

  
