---
layout: guide
title: Channel
parent: LNURL
grand_parent: Web Services
description: API to automate the creation of a channel with the node server.
nav_order: 40
has_children: false
permalink: /guide/web-services/lnurl/channel
main_classes: -no-top-padding
---

# Request the creation of incoming channels from a service
###### LNURL-CHANNEL

This flow used in the case where a recipient (`LN WALLET`) needs to have a channel opened with some payer/service (`LN SERVICE`). It is useful in cases where for e.g. a user of a service needs to withdraw some balance held by the service to their own user wallet via a new channel.

Traditionally this would be a 3-step process that consists of:
- The `LN WALLET` finding the node uri of the `LN SERVICE` out-of-band somehow and using it to connect to the `LN SERVICE`'s node
- The `LN WALLET` requesting a channel out-of-band somehow with the relevant amount pushed to them via a channel with the `LN WALLET`'s node id
- The `LN SERVICE` actively confirming the connection to the node id and then opening the new channel

The ***LNURL-channel flow*** standardises the communication of these details and some of the required intermediate steps into a single UX action initiated by the `LN WALLET`.

<!--
TODO:
>_**[Illustrate user flow differences here with an animation maybe]**_
> - _Visit a website, find the node uri somehow, intiate the connection, get stuck with requesting the withdrawal via new channel (maybe via chat or email?) **vs.**_
> - _Scan a withdraw-via-channel QR code, enter withdraw amount, click 'withdraw' button_
-->

**Use-cases:**
- user requesting inbound liquidity from some service via a channel open
- user withdrawing a balance from some service where no direct channels or paths via existing channels currently exist, via a channel open and push amount
- user behind a NAT or on mobile where node IP isn't publicly available for receiving connections; LNURL allows for the user to instead initiate the connection out

**LN primitives involved:**
- LN Channels

## An Example Flow
_[Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-channel.md) | Flow docs_

1. **`LN SERVICE`: Generate a unique LNURL endpoint**

    The first step is for the **`LN SERVICE`** to setup and encode a unique LNURL endpoint for the `LN WALLET` user. The **`LN SERVICE`** would determine the channel capacity (`localAmt`) and amount to send to the user (`pushAmt`) at this point.

    ```js
    // The params for the endpoint are determined
    // > Reference: https://github.com/chill117/lnurl-node/blob/5decaa533e01c63771cf471184459d40c505aede/README.md#channelrequest
    var params = {
        "localAmt": 10000,  // full capacity of channel
        "pushAmt": 8000,    // amount pushed to remote
    }

    // An endpoint is setup to generate a response which will include the 'params'
    "https://lnurl-toolbox.degreesofzero.com/u?q=9c90bb71c63975e4fcb0f874b1a7a33fa8ce7998b20c0cf6d1dc7bb1d7960b1a"

    // Endpoint gets bech32 encoded
    "lnurl1dp68gurn8ghj7mrww4exctt5dahkccn00qhxget8wfjk2um0veax2un09e3k7mf0w5lhz0fevvunqcnzxuckxd3n8ymn2ef5ve3kyvrx8qmngc33vymkzvenvesnscm9xuunjwrzxgcxxvrrvcmxgvtyvvmkyc33vsmnjd3svgckzcrx382"
    ```

1. **`LN WALLET`: Scan the LNURL QR Code (or copy-paste the LNURL bech32 string)**

    The user opens an LNURL-enabled wallet and scans or pastes the LNURL bech32 string. The wallet then calls the endpoint and receives a response with parameters required to be used for node connection by the **`LN WALLET`** and channel opening by the **`LN SERVICE`**. The response also contains a secret `k1` that the **`LN WALLET`** must send along in the subsequent channel open request later on.

    ```sh
    # Wallet decodes the LNURL invoice and sends a GET request to decoded url
    GET https://lnurl-toolbox.degreesofzero.com/u?q=9c90bb71c63975e4fcb0f874b1a7a33fa8ce7998b20c0cf6d1dc7bb1d7960b1a
    ```

    ```js
    // Wallet receives a response
    {
        "uri":"023cec285d3c287168b0fb9a1b28f6358c6e912d2f63e0735e0071a8d523436d0a@lnurl-toolbox.degreesofzero.com:29735",
        "callback":"https://lnurl-toolbox.degreesofzero.com/u",
        "k1":"9c90bb71c63975e4fcb0f874b1a7a33fa8ce7998b20c0cf6d1dc7bb1d7960b1a",
        "tag":"channelRequest"
    }
    ```

1. **`LN WALLET`: Connect to the `LN SERVICE` node**

    The `LN WALLET` would use the `"uri"` provided in the response from above to open a connection between its node and the `LN SERVICE`'s node.

1. **`LN WALLET`: Send channel open confirmation request with appropriate parameters**

    The `LN WALLET` sends another request to `LN SERVICE` using the callback from the original response. The request would contain the node uri for the `LN WALLET` node that it connected from, and a `private` boolean to indicate whether the channel should be private or not.

    In this case for example, assuming the following parameters:

    ```js
    {
        "node_uri": "03d5e17a3c213fe490e1b0c389f8cfcfcea08a29717d50a9f453735e0ab2a7c003@3.16.119.191:9735",
        "private": 0
    }
    ```

    The request sent to the callback url would be:
    ```sh
    GET https://lnurl-toolbox.degreesofzero.com/u?k1=9c90bb71c63975e4fcb0f874b1a7a33fa8ce7998b20c0cf6d1dc7bb1d7960b1a&remoteid=03d5e17a3c213fe490e1b0c389f8cfcfcea08a29717d50a9f453735e0ab2a7c003&private=0
    ```

    _Note: the `node id` for the above request is extracted from a `node uri` based on the uri format `<node_id>@<ip>:<port>`_

1. **`LN SERVICE`: Receive request, verify, open channel**

    The `LN SERVICE` parses the received request and responds with an "ok" or "error" message.

    ```js
    // Response sent back to `LN WALLET`
    {"status":"OK"}
    ```

    The `LN SERVICE` then initiates the channel open over the Lightning Network.

1. **`LN WALLET`: Awaits OpenChannel message**

    The wallet waits for an incoming OpenChannel message from the target node which would initiate a channel opening.
