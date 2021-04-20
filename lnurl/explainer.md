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

_[progressively implement a flow a la [this playground example](https://www.oauth.com/playground/device-code.html)]_



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