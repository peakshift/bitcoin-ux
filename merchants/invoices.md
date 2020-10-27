# Invoicing and invoices in Bitcoin payments in a merchant context

This document tries to explain merchant invoices in Bitcoin payments. The invoices and invoicing mentioned here, refer to payment processing in retail or online business, where the receiver, referred to as the merchant or a seller is using some sort of a payment gateway to accept Bitcoin payments.

## Motivation

The document is targeted towards designers and developers working on designing or developing an e-commerce tool to accept Bitcoin payments.

The goal is to compare and showcase essential components used by various payment gateways, understand how they interact with one another and present them in an easy-to-understand way. 

## Invoice

Bitcoin invoice used in commerce tools, doesn’t usually differ from a regular invoice one may come across when doing a checkout at a website. It is important to note the distinction between an **invoice seen on the sender's end**, sometimes referred to as the “checkout page/invoice” and the **invoice on receiver's end**

The goal of the *invoice on the sending (buyer) side* is to provide information necessary to pay such invoice. 
On the other hand, the *invoice on the receiving side* is usually used to fulfill the order or validate payment information in case of a problem.

Majority of cryptocurrency payment processors and gateways provide standard components of an invoice, which will be dissected below.

### Components of a buyer's invoice (checkout page)

![](./img/InvoicesViewBuyerSide.png)

The basic components of an invoice visible to the buyer are:

* A) QR Code with encoded amount and receiving address
* B) Timer which sets invoice to expired (to avoid volatility in rates)
* C) Invoice details (Total Price in fiat, Exchange rate, etc)
* D) Total amount and an address that can be copied separately (for wallet desktop users)
* E) Open in a wallet (Pay in a wallet) a button that opens and auto-populates sender's wallet fields

### Components of a merchant's invoice

The invoice that’s appearing on merchant end needs to provide data relevant for:

* Verifying the payment
* Fulfilling the order
* Troubleshooting an issue

**Payment verification** is mostly handled by the payment processing software. In case of a problem with the payment, the payment processor notifies the merchant to take certain action,depending on the invoice status.

**Order fulfillment** data is relevant data a merchant needs to have in order to deliver the order. This kind of data is optional, and depends on the e-commerce CMS or the API settings merchant configured.

**Troubleshooting an issue** happens when usually there’s a problem with the payment or retroactively if there’s a need for a refund. Centralized payment processors have their support departments that handle this type of queries for merchants, especially processors that are custodial and convert funds instantly to fiat. The essential data needed here needs to provide information about the payment which would allow merchants an easy way to detect an issue and take action. This usually contains a transaction ID, the amount, the invoice (transaction/transactions) status.

#### Data Structure of an invoice

![](./img/MerchantInvoiceData.png)

Here's an overview of typical data structure on an invoice on the receiver's (merchant's) side.

* A) General Invoice information – contains timestamps, invoice ID, invoice status, etc.
* B) Buyer’s information – optional used for fulfilling the order, the data can be parsed into CMS invoices like WordPress, so merchants don't need to look for this data in BTCPay in case they’re using a CMS.
* C) Product information – optional, used to provide information on what product was purchased.
* D) Invoice summary – provides quick information to quickly troubleshoot an issue or verify the payment manually if that’s needed
* E) Event logs – provide in-depth information about the status of the invoice and it’s transaction on the blockchain.

##### Data Structure - Code examples

```json
{
  "amount": "string",
  "currency": "string",
  "metadata": "string",
  "checkout": {
    "speedPolicy": "HighSpeed",
    "paymentMethods": [
      "string"
    ],
    "expirationMinutes": 0,
    "monitoringMinutes": 0,
    "paymentTolerance": 0
  },
  "id": "string",
  "createdTime": 0,
  "expirationTime": 0,
  "monitoringTime": 0,
  "status": "New",
  "additionalStatus": "None"
}
```
## Invoice Generation Flow

![Invoice Generation Flow](./img/InvoiceGenerationFlow.png)

## Payment Processors - Comparison of invoice design 

![BitPay, OpenNode and BitCartCC](./img/ComparisonInvoices1.png)

![Globee, CoinGate and Confirmo](./img/ComparisonInvoices2.png)

![CryptoWoo, Blockonomics](./img/ComparisonInvoices3.png)
