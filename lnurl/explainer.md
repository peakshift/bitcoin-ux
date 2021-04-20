# LNURL

LNURL is a standard for streamlining the process of enabling a user to conduct certain Lightning Network based operations with a service or full node server on the network. It is particularly useful because it automates some otherwise manual steps when executing these operations between two or more parties. This allows providers that make use of Lightning Network functionality to deploy automated versions of their offerings that can interact autonomously with users by implementing one or more of the various flows.

_**`TODO`**: include explanation of bech32 usage_

There are 4 different LNURL flows that serve to expose different functionality sets to the user:
- **LNURL-pay**: For paying for a service
- **LNURL-withdraw**: For withdrawing funds from a service
- **LNURL-channel**: For requesting incoming channels from a service
- **LNURL-auth**: For securely logging in to some service

---

## LNURL-pay Flow

This flow is used in the case where a payer needs to pay a recipient for some product or service. It is most useful in the cases where the payer needs to initiate the payment request somehow (e.g. an in-app button to pay a certain amount to the payee). It can still be useful however if the payee initiates the payment request, for e.g., in a shopping cart in their website.

Traditionally, making a payment initiated by the payer via the Lightning Network is a 2-step process that consists of:
1. Some active out-of-band communication from the payer to the recipient that they would like to pay a certain amount, and the recipient generating/sending an LN invoice back to the payer to be paid
1. The payer actively paying the LN invoice in-band from an LN-enabled wallet

The ***LNURL-pay flow*** automates the first step and combines it with the second step so that to the payer it feels like they are only doing a 1-step process. This can be contrasted with for e.g. a BTCPayServer lightning invoice creation endpoint where the endpoint must first be called with the appropriate parameters, and then a BOLT11 invoice is received back via an http response which the payer must then actively pay somehow.

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
1. Using an LNURL-enabled LN Wallet, **payer** requests an LN invoice with certain parameters (description, amount etc.) from a **recipient** by pinging the recipient's endpoint with the query parameters. This can be currently done by simply scanning a QR code representation of a bech32-encoded endpoint
1. The **recipient** receives the request and generates an LN invoice against these parameters
1. The **recipient** sends the LN invoice back to the **payer** via a response of some type (http response? separate endpoint call?)
1. The **payer** receives the LN Invoice and then pays the invoice
1. **Recipient** receives payment and sends back a confirmation message _(is the preimage enough for this, or is an explicit message sent?)_

### An Example Flow

1. **`Recipient-Server`: Generate a unique LNURL endpoint**

    The first step is for the **recipient** to setup and encode a unique LNURL endpoint

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

    // An endpoint is setup to generate a response with the 'params' send along as well
    "https://lnurl-toolbox.degreesofzero.com/u?q=7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b"

    // Endpoint gets bech32 encoded
    "lnurl1dp68gurn8ghj7mrww4exctt5dahkccn00qhxget8wfjk2um0veax2un09e3k7mf0w5lhz0fhve3nsdenxejkzdenxscxxv33x93kxc3evymkycesvymxxdfj8qcrgdfkv93nxvfev9jngcejv9nxxvpevgergepnxa3xgep58qukyakqmda"
    ```

1. **`User`: Scan the LNURL QR Code (or copy-paste the LNURL bech32 string)**

    The user opens an LNURL-enabled wallet and scans or pastes the LNURL invoice. The wallet then calls the endpoint and receives a response with parameters required to be filled into an LN invoice by the **Recipient-Server**.

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

1. **`User`: Enter amount and confirm send via in-wallet payment dialog**

    The wallet should present a dialog at this point where the user can enter an amount (constrained to a given valid range) and an optional comment. These will be included in the request being sent to the `Recipient-Server` callback.

1. **`User-Wallet`: Sends invoice details to Recipient-Server**

    The wallet adds the user-defined parameters and any other parameters (e.g. route hints) to a request object and then calls the callback url with this object.

    ```sh
    GET https://lnurl-toolbox.degreesofzero.com/u/7fc8736ea7340c211ccb9a7bc0a6c5280456ac319ae4c2afc09b24d37bdd489b?amount=15000

    ```

1. **`Recipient-Server`: Receive request and generate LN invoice to send back in response**

    The recipient's LNURL server parses the request and extracts the parameteres relevant for LN invoice creations. It then calls out to its own Lightning Network client service with the appropriate parameters to have an LN invoice generated to be sent back to the user in the http response.

    The response may also include a `"successAction"` parameter with some action for the user to perform on successful payment of the invoice from its LN wallet.

    ```js
    {
        "pr": "lnbc150n1ps87q2hpp54fdh8q8dtmd3cgqy8l3qulz724j9hdfmwun2x8jcswlyh52wguqshp576uhqd5rgq8y66zrllqtpr8nsj8ee34nz32yn5f6vem4xxfawhtsxqrrsscqpf9z4gk9luxpy55nkxnsank57h6yy7gev9kzfua7qm37lxxfqggs8sj2dv09w3df2786xyz6jjar0kss38x7yayq73wwfujkym297669gps04eg0",
        "successAction": null,
        "routes": []
    }
    ```

1. **`User-wallet`: Receive response, verify, pay**

    The user's wallet decodes the received LN invoice and verifies the amount and validity of the invoice against the original request sent to the Recipient-Server.

    The wallet then attempts to pay the LN invoices, and on completion of payment executes the `"successAction"` action if it is not `null`.

## LNURL-withdraw Flow
This flow used in the case where a recipient needs to initiate payment to themselves from some payer. It is useful in cases where for e.g. a user of a service needs to withdraw some balance held by the service to their own wallet.

Traditionally this would be a 2-step process that consists of:
- The recipient generating an LN-invoice and passing it to the payer out-of-band somehow (likely a copy-paste operation)
- The payer actively paying the invoice received

This process is particularly tricky for the recipient when they have to figure out how to communicate the generated invoice to the payer if for e.g. the payer is a website or some service on a separate device (e.g. desktop) from where the recipient's wallet is (e.g. mobile).

The ***LNURL-withdraw flow*** standardises the communication of this LN invoice and payment of the invoice into a single UX action initiated by the recipient.

>_**[Illustrate user flow differences here with an animation maybe]**_
> - _Visit a website, be presented with input field for LN invoice, switch to mobile device & generate invoice, switch to Telegram and paste invoice, switch to Telegram on desktop and copy invoice, switch to website and paste, **vs.**_
> - _Scan a withdraw QR code, enter withdraw amount, click 'withdraw' button_

**Use-cases:**
- user withdrawing a balance from some service

**LN primitives involved:**
- LN Invoice

### Steps
1. Using an LNURL-enabled LN Wallet, **recipient** requests that they would like to intiate a payment from the **payer** by pinging the payer's endpoint. This can be currently done by simply scanning a QR code representation of a bech32-encoded endpoint
1. The **payer** receives the request and responds with:
    - a callback url that an LN-invoice can be sent to for payment
    - a value for the min and max requestable amounts from the payer
    - a secret `kq` to identify the **recipient** when they use the callback url
1. The **recipient** creates an LN invoice with the amount between min and max and then sends it back to the payer along with the secret `k1`
1. The **payer** responds to the request and then attempts payment of the LN invoice


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
