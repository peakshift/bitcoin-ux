# LNURL

LNURL is a standard for streamlining the process of enabling a user to conduct certain Lightning Network based operations with a service or full node server on the network. It is particularly useful because it automates some otherwise manual steps when executing these operations between two or more parties. This allows providers that make use of Lightning Network functionality to deploy automated versions of their offerings that can interact autonomously with users by implementing one or more of the various flows.

#### Bech32

LNURL endpoints are encoded as bech32-encoded HTTPS/Onion query strings. This is to allow existing Lightning Network implementations to easily work with these strings either via QR codes or as LN-invoice-like bech32 strings. Encoding endpoints like this allows for easy integration into existing LN services/apps since most of these would already have functionality built in to receive/send and encode/decode bech32 values.

e.g.: the endpoint:
```
https://service.com/api?q=3fc3645b439ce8e7f2553a69e5267081d96dcd340693afabe04be7b0ccd178df
```
would be encoded to:
```
LNURL1DP68GURN8GHJ7UM9WFMXJCM99E3K7MF0V9CXJ0M385EKVCENXC6R2C35XVUKXEFCV5MKVV34X5EKZD3EV56NYD3HXQURZEPEXEJXXEPNXSCRVWFNV9NXZCN9XQ6XYEFHVGCXXCMYXYMNSERXFQ5FNS
```

When an LNURL-enabled app receives an LNURL-specific bech32 string, it would decode the string and then send the appropriate requests to the decoded endpoint to start the relevant LNURL flow.

#### Flows

There are 4 different LNURL flows that serve to expose different functionality sets to the user:
- **LNURL-pay**
    For paying for a service

- **LNURL-withdraw**
    For withdrawing funds from a service

- **LNURL-channel**
    For requesting incoming channels from a service

- **LNURL-auth**
    For securely logging in to some service

---

## LNURL-pay Flow

This flow is used in the case where a payer (`LN WALLET`) needs to pay a recipient (`LN SERVICE`) for some product or service. It is most useful in the cases where the `LN WALLET` needs to initiate the payment request somehow (e.g. an in-app button to pay a certain amount to the `LN SERVICE`). It can still be useful however if the `LN SERVICE` initiates the payment request, for e.g., in a shopping cart in their website.

Traditionally, making a payment initiated by the `LN WALLET` via the Lightning Network is a 2-step process that consists of:
1. Some active out-of-band communication from the `LN WALLET` to the `LN SERVICE` that they would like to pay a certain amount, and the `LN SERVICE` generating/sending an LN invoice back to the `LN WALLET` to be paid
1. The `LN WALLET` actively paying the LN invoice in-band from an LN-enabled wallet

The ***LNURL-pay flow*** automates the first step and combines it with the second step so that to the `LN WALLET` user it feels like they are only doing a 1-step process. This can be contrasted with for e.g. a BTCPayServer lightning invoice creation endpoint where the endpoint must first be called with the appropriate parameters, and then a BOLT11 invoice is received back via an http response which the `LN WALLET` must then actively pay somehow.

> _**[Illustrate user flow differences here with an animation maybe]**_
> _For a static payment:_
> - _Visit an endpoint first; scan a LN Invoice after, **vs.**_
> - _Simply scan a LNURL QR code_

**Use-cases:**
- Static LN-compatible payment QR code
- Shopping cart checkout alternative (dynamic payment QR code)

**LN primitives involved:**
- LN Invoice

### Steps
_[Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md) | [Flow docs](https://xn--57h.bigsun.xyz/lnurl-pay-flow.txt)_
1. Using an LNURL-enabled LN Wallet, **`LN WALLET`** requests an LN invoice with certain parameters (description, amount etc.) from a **`LN SERVICE`** by pinging the `LN SERVICE`'s endpoint with the query parameters. This can be currently done by simply scanning a QR code representation of a bech32-encoded endpoint
1. The **`LN SERVICE`** receives the request and generates an LN invoice against these parameters
1. The **`LN SERVICE`** sends the LN invoice back to the **`LN WALLET`** via a response of some type (http response? separate endpoint call?)
1. The **`LN WALLET`** receives the LN Invoice and then pays the invoice
1. **`LN SERVICE`** receives payment and sends back a confirmation message _(is the preimage enough for this, or is an explicit message sent?)_

### An Example Flow

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

## LNURL-withdraw Flow
This flow used in the case where a recipient (`LN WALLET`) needs to initiate payment to themselves from some payer/service (`LN SERVICE`). It is useful in cases where for e.g. a user of a service needs to withdraw some balance held by the service to their own user wallet.

Traditionally this would be a 2-step process that consists of:
- The `LN WALLET` generating an LN-invoice and passing it to the `LN SERVICE` out-of-band somehow (likely a copy-paste operation)
- The `LN SERVICE` actively paying the invoice received

This process is particularly tricky for the `LN WALLET` when they have to figure out how to communicate the generated invoice to the `LN SERVICE` if for e.g. the `LN SERVICE` is a website or some service on a separate device (e.g. desktop) from where the `LN WALLET` is (e.g. mobile).

The ***LNURL-withdraw flow*** standardises the communication of this LN invoice and payment of the invoice into a single UX action initiated by the `LN WALLET`.

>_**[Illustrate user flow differences here with an animation maybe]**_
> - _Visit a website, be presented with input field for LN invoice, switch to mobile device & generate invoice, switch to Telegram and paste invoice, switch to Telegram on desktop and copy invoice, switch to website and paste, **vs.**_
> - _Scan a withdraw QR code, enter withdraw amount, click 'withdraw' button_

**Use-cases:**
- user withdrawing a balance from some service

**LN primitives involved:**
- LN Invoice

### Steps
_[Spec docs](https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-withdraw.md) | [Flow docs](https://xn--57h.bigsun.xyz/lnurl-withdraw-flow.txt)_
1. Using an LNURL-enabled LN Wallet, **`LN WALLET`** requests that they would like to intiate a payment from the **`LN SERVICE`** by pinging the `LN SERVICE`'s endpoint. This can be currently done by simply scanning a QR code representation of a bech32-encoded endpoint
1. The **`LN SERVICE`** receives the request and responds with:
    - a callback url that an LN-invoice can be sent to for payment
    - a value for the min and max requestable amounts from the `LN SERVICE`
    - a secret `k1` to identify the **`LN WALLET`** when they use the callback url
1. The **`LN WALLET`** creates an LN invoice with the amount between min and max and then sends it back to the `LN SERVICE` along with the secret `k1`
1. The **`LN SERVICE`** responds to the request and then attempts payment of the LN invoice

### An Example Flow

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

## LNURL-channel Flow

**Use-cases:**
- user requesting inbound liquidity from some service via a channel open
- user withdrawing a balance from some service where no channels currently exists, via a channel open and push amount
- user withdrawing a balance from some service where no path via existing channels currently exists, via a channel open and push amount

**LN primitives involved:**
- LN Channels

### Steps


## LNURL-auth Flow

**LN primitives involved:**
- Wallet private keys

### Steps


---

**Notes:**
- _progressively implement flows a la [this playground example](https://www.oauth.com/playground/device-code.html)_
