---
layout: guide
title: Pay
parent: LNURL
grand_parent: Web Services
description: API for a service to generate invoices given some parameters.
nav_order: 20
has_children: false
permalink: /guide/web-services/lnurl/pay
main_classes: -no-top-padding
---

# Generate invoices given some parameters
###### LNURL-PAY

This flow is used in the case where a payer (`LN WALLET`) needs to pay a recipient (`LN SERVICE`) for some product or service. It is most useful in the cases where the `LN WALLET` needs to initiate the payment request somehow (e.g. an in-app button to pay a certain amount to the `LN SERVICE`). It can still be useful however if the `LN SERVICE` initiates the payment request, for e.g., in a shopping cart in their website.

Traditionally, making a payment initiated by the `LN WALLET` via the Lightning Network is a 2-step process that consists of:
1. Some active out-of-band communication from the `LN WALLET` to the `LN SERVICE` that they would like to pay a certain amount
2. The `LN SERVICE` generating an LN invoice
3. Copying it back to the `LN WALLET` to be paid
4. The `LN WALLET` actively paying the LN invoice in-band from an LN-enabled wallet

The ***LNURL-pay flow*** automates the first step and combines it with the second step so that to the `LN WALLET` user it feels like they are only doing a 1-step process. This can be contrasted with for e.g. a BTCPayServer lightning invoice creation endpoint where the endpoint must first be called with the appropriate parameters, and then a BOLT11 invoice is received back via an http response which the `LN WALLET` must then actively pay somehow.

<!--
TODO:
> _**[Illustrate user flow differences here with an animation maybe]**_
> _For a static payment:_
> - _Visit an endpoint first; scan a LN Invoice after, **vs.**_
> - _Simply scan a LNURL QR code_
-->

**Use-cases:**
- Static LN-compatible payment QR code
- Shopping cart checkout alternative (dynamic payment QR code)

**LN primitives involved:**
- [Standard Invoice](/guide/invoices)

## An Example Flow
_[Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md) | [Flow docs](https://xn--57h.bigsun.xyz/lnurl-pay-flow.txt)_

1. **``LN SERVICE``: Generate a unique LNURL endpoint**

    The first step is for the **`LN SERVICE`** to setup and encode a unique LNURL endpoint

    ```js
    // The params for the endpoint are determined
    var params = {
        "minSendable": 10000,
        "maxSendable": 20000,
        "metadata": [
            [
                "text/plain",
                "lnurl-toolbox: payRequest"
            ]
        ]
    }

    // An endpoint is setup to generate a response which will include the 'params'
    "https://lnurl-toolbox.degreesofzero.com/u?q=7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b"

    // Endpoint gets bech32 encoded
    "lnurl1dp68gurn8ghj7mrww4exctt5dahkccn00qhxget8wfjk2um0veax2un09e3k7mf0w5lhz0fhve3nsdenxejkzdenxscxxv33x93kxc3evymkycesvymxxdfj8qcrgdfkv93nxvfev9jngcejv9nxxvpevgergepnxa3xgep58qukyakqmda"
    ```

1. **`LN WALLET`: Scan the LNURL QR Code (or copy-paste the LNURL bech32 string)**

    The user opens an LNURL-enabled wallet and scans or pastes the LNURL invoice. The wallet then calls the endpoint and receives a response with parameters required to be filled into an LN invoice by the **`LN SERVICE`**.

    ```sh
    # Wallet decodes the LNURL invoice and sends a GET request to decoded url
    GET https://lnurl-toolbox.degreesofzero.com/u?q=7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b
    ```

    ```js
    // Wallet receives a response
    {
        "minSendable": 10000,
        "maxSendable": 20000,
        "metadata": "[[\"text/plain\",\"lnurl-toolbox: payRequest\"]]",
        "callback": "https://lnurl-toolbox.degreesofzero.com/u/7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b",
        "tag": "payRequest"
    }
    ```

1. **`LN WALLET`: Enter amount and confirm send via in-wallet payment dialog**

    The wallet should present a dialog at this point where the user can enter an amount (constrained to a given valid range) and an optional comment. These will be included in the request being sent to the ``LN SERVICE`` callback.

1. **`LN WALLET`: Sends invoice details to `LN SERVICE`**

    The wallet adds the user-defined parameters and any other parameters (e.g. route hints) to a request object and then calls the callback url with this object.

    ```sh
    GET https://lnurl-toolbox.degreesofzero.com/u/7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b?amount=15000

    ```

1. **`LN SERVICE`: Receive request and generate LN invoice to send back in response**

    The `LN SERVICE`'s LNURL server parses the request and extracts the parameteres relevant for LN invoice creations. It then calls out to its own Lightning Network client service with the appropriate parameters to have an LN invoice generated to be sent back to the user in the http response.

    The response may also include a `"successAction"` parameter with some action for the user to perform on successful payment of the invoice from `LN WALLET`.

    ```js
    {
        "pr": "lnbc150n1ps87q2hpp54fdh8q8dtmd3cgqy8l3qulz724j9hdfmwun2x8jcswlyh52wguqshp576uhqd5rgq8y66zrllqtpr8nsj8ee34nz32yn5f6vem4xxfawhtsxqrrsscqpf9z4gk9luxpy55nkxnsank57h6yy7gev9kzfua7qm37lxxfqggs8sj2dv09w3df2786xyz6jjar0kss38x7yayq73wwfujkym297669gps04eg0",
        "successAction": null,
        "routes": []
    }
    ```

1. **`LN WALLET`: Receive response, verify, pay**

    The `LN WALLET` decodes the received LN invoice and verifies the amount and validity of the invoice against the original request sent to the `LN SERVICE`.

    The `LN WALLET` then attempts to pay the LN invoices, and on completion of payment executes the `"successAction"` action if it is not `null`.
