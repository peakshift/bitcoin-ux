---
layout: guide
title: Withdraw
parent: LNURL
grand_parent: Web Services
description: API to automate the withdrawal of funds that have been allocated to the requesting client.
nav_order: 30
has_children: false
permalink: /guide/web-services/lnurl/withdraw
main_classes: -no-top-padding
---

# Withdrawal of funds from a service
###### LNURL-WITHDRAW

This flow used in the case where a recipient (`LN WALLET`) needs to initiate payment to themselves from some payer/service (`LN SERVICE`). It is useful in cases where for e.g. a user of a service needs to withdraw some balance held by the service to their own user wallet.

Traditionally this would be a 2-step process that consists of:
- The `LN WALLET` generating an LN-invoice and passing it to the `LN SERVICE` out-of-band somehow (likely a copy-paste operation)
- The `LN SERVICE` actively paying the invoice received

This process is particularly tricky for the `LN WALLET` when they have to figure out how to communicate the generated invoice to the `LN SERVICE` if for e.g. the `LN SERVICE` is a website or some service on a separate device (e.g. desktop) from where the `LN WALLET` is (e.g. mobile).

The ***LNURL-withdraw flow*** standardises the communication of this LN invoice and payment of the invoice into a single UX action initiated by the `LN WALLET`.

<!--
TODO:
>_**[Illustrate user flow differences here with an animation maybe]**_
> - _Visit a website, be presented with input field for LN invoice, switch to mobile device & generate invoice, switch to Telegram and paste invoice, switch to Telegram on desktop and copy invoice, switch to website and paste, **vs.**_
> - _Scan a withdraw QR code, enter withdraw amount, click 'withdraw' button_
-->

**Use-cases:**
- user withdrawing a balance from some service

**LN primitives involved:**
- LN Invoice

## An Example Flow
_[Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-withdraw.md) | [Flow docs](https://xn--57h.bigsun.xyz/lnurl-withdraw-flow.txt)_

1. **`LN SERVICE`: Generate a unique LNURL endpoint**

    The first step is for the **`LN SERVICE`** to setup and encode a unique LNURL endpoint for the `LN WALLET` user.

    ```js
    // The params for the endpoint are determined
    var params = {
        "minWithdrawable": 10000,
        "maxWithdrawable": 20000,
        "defaultDescription": "lnurl-toolbox: withdrawRequest"
    }

    // An endpoint is setup to generate a response which will include the 'params'
    "https://lnurl-toolbox.degreesofzero.com/u?q=a7dd031e0506e8da6da3cef92970fab4d61f099051b4941e8a2ce9d338963aad"

    // Endpoint gets bech32 encoded
    "lnurl1dp68gurn8ghj7mrww4exctt5dahkccn00qhxget8wfjk2um0veax2un09e3k7mf0w5lhz0tpxajxgvpnx9jnqdfsxejnserpxejxzvmrv4nrjv3exucxvctzx3jrvvtxxqunjvp4x93rgwf5x9jnscfjvdjnjepnxvurjd3nv9skg4e9eg2"
    ```

1. **`LN WALLET`: Scan the LNURL QR Code (or copy-paste the LNURL bech32 string)**

    The user opens an LNURL-enabled wallet and scans or pastes the LNURL invoice. The wallet then calls the endpoint and receives a response with parameters required to be filled into an LN invoice by the **`LN SERVICE`**. The response also contains a secret `k1` that the **`LN WALLET`** must also send along in the subsequent withdrawal request later on.

    ```sh
    # Wallet decodes the LNURL invoice and sends a GET request to decoded url
    GET https://lnurl-toolbox.degreesofzero.com/u?q=a7dd031e0506e8da6da3cef92970fab4d61f099051b4941e8a2ce9d338963aad
    ```

    ```js
    // Wallet receives a response
    {
        "minWithdrawable":10000,
        "maxWithdrawable":20000,
        "defaultDescription":"lnurl-toolbox: withdrawRequest",
        "callback":"https://lnurl-toolbox.degreesofzero.com/u",
        "k1":"a7dd031e0506e8da6da3cef92970fab4d61f099051b4941e8a2ce9d338963aad",
        "tag":"withdrawRequest"
    }
    ```

1. **`LN WALLET`: Enter amount and confirm withdrawal via in-wallet payment dialog**

    The `LN WALLET` should present a dialog at this point where the user can enter an amount (constrained to a given valid range).

1. **``LN WALLET``: Generate LN invoice to send in request**

    The `LN WALLET` uses the amount from the user input to generate a valid LN invoice in the traditional way internally.

    ```
    lnbc150n1ps875y7pp5jv886ulk50nt0dm94sgr6q7zquv3qv5h8dnxkvn022fhtlp8x40sdqlf38925jv94mkjargv3exzaeqw3jhxaqcqzpgxqyz5vqsp5w33wl0jwkmrjqjkptz05c3rlwumgzt0gr2z2vg5pg6ctcdj4426q9qyyssqdrsph679ra7vuk5exkemtjhx0f3ee3xk2nf7egj0dapn5erwzjr404x0z6580c4wrgxnnwv8kcgwwc0z396rmnk4u35xms7temlpxvsqstsqn9
    ```

1. **``LN WALLET``: Sends withdrawal details to `LN SERVICE`**

    The `LN WALLET` adds the generated LN invoice and the original secret `k1` to a request object and then calls the callback url with this object.

    ```sh
    GET https://lnurl-toolbox.degreesofzero.com/u?k1=a7dd031e0506e8da6da3cef92970fab4d61f099051b4941e8a2ce9d338963aad&pr=lnbc150n1ps875y7pp5jv886ulk50nt0dm94sgr6q7zquv3qv5h8dnxkvn022fhtlp8x40sdqlf38925jv94mkjargv3exzaeqw3jhxaqcqzpgxqyz5vqsp5w33wl0jwkmrjqjkptz05c3rlwumgzt0gr2z2vg5pg6ctcdj4426q9qyyssqdrsph679ra7vuk5exkemtjhx0f3ee3xk2nf7egj0dapn5erwzjr404x0z6580c4wrgxnnwv8kcgwwc0z396rmnk4u35xms7temlpxvsqstsqn9

    ```

1. **`LN SERVICE`: Receive request, verify, pay**

    The `LN SERVICE` decodes the received LN invoice and verifies the amount and validity of the invoice against the original request sent to the `LN WALLET`.

    The `LN SERVICE` then responds with an appropriate message once the request is verified and then it attempts to pay the LN invoice.

    ```js
    // Response sent back to `LN WALLET`
    {"status":"OK"}
    ```
