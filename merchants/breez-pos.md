# Merchants / Breez POS

> Merchants are the missing piece

> Lightning has to be easy, functional fintech for the average consumer. And the average consumer usually transacts with the average merchant.

> Merchants are the reverse of consumers: they receive more than they pay.[1][]

## Problems

### UX

> Merchants are still out there. When their shops re-open, they’ll be receiving many payments and sending few. Merchants who’ve used our existing beta have helped us learn how to serve them better. What they want is an app that makes it as easy to receive bitcoin for a sale as it is to send bitcoin for a purchase. Fiat is busy undermining itself, so merchants need a tool to flourish in the coming Lightning economy.

### Volitaltiy

> Hodlers might not care if the bitcoin price swings 20% over the course of a day. Merchants accepting bitcoin have no choice. They cannot afford to accidentally sell below cost or to overcharge and drive their customers elsewhere. With currency values set to fluctuate faster than [Rihanna’s hairdo](https://duckduckgo.com/?q=rihanna+hairstyles&t=h_&iax=images&ia=images), transparent, up-to-date exchange rates are going to be more valuable than ever.
>
> As the world transitions from fiat to bitcoin, merchants have to keep an eye on both. That’s why it’s easy to charge in fiat value using POS mode. Merchants can charge in USD, EUR, GPB, or JPY (with more to come). This helps merchants as well as customers to see that the delicious falafel-wrap-and-mint-tea lunch won’t cost anybody that month’s rent.

### Access Controls

> Merchants need to watch who’s using their system and for what purposes. Of the many employees who might need to receive payments, only few will need to send payments.

> Managers can let sales and cashier staff use mobile devices with the app, the staff can do their jobs and accept payments, but the managers can prevent them from sending funds without authorization.

### Accounting

> Another function is the ability to export a record of transactions in [.csv](https://en.wikipedia.org/wiki/Comma-separated_values)format. This allows managers to easily calculate their gross, their net, and to see just how fast they’ve restored their businesses (get it? re-*store*-d?).

> Imagine, you are a taxi driver for example. You need to generate invoice, and get paid via app. You have no email, you must print it.

#### Potential Solutions

> Export transactions — Another function is the ability to export a record of transactions in [.csv](https://en.wikipedia.org/wiki/Comma-separated_values)format. This allows managers to easily calculate their gross, their net, and to see just how fast they’ve restored their businesses

> **POS Connected to a Wireless Printer** — It would be best to integrate option to connect printer like this: [https://m.aliexpress.com/item/4001204296782](https://m.aliexpress.com/item/4001204296782.html)

### Inbound capacity

> Since merchants receive payments constantly but only seldom pay outwards in a typical week, they could run into [a shortage of inbound capacity](https://blog.muun.com/the-inbound-capacity-problem-in-the-lightning-network/).

#### Potential Solutions

> In order to deal with the need for increased capacity, we’ve integrated [LNURL-channel](https://github.com/btcontract/lnurl-rfc/blob/master/spec.md). This protocol allows merchants to use external services like [Bitrefill](https://www.bitrefill.com/buy/lightning/?hl=en), [LNBIG](https://lnbig.com/#/), and other LSPs to open additional channels simply by scanning a QR code. However, since Breez doesn’t yet support [multi-path payments](https://wiki.ion.radar.tech/tech/research/atomic-multi-path-payments), testing this feature to make sure it fits your needs before using it for live transactions is highly recommended.

## Persona

- Operates a physical store
- Early Adopter
- Willing to try Beta Software
- Device: Android / iOS user

### Motivations

- Wants to get bitcoins
- Lack of trust in banking systems
- Reducing payment processing costs
- Unbanked

[1]: https://medium.com/breez-technology/breezs-point-of-sale-mode-a-new-tool-for-the-day-after-tomorrow-fb8c0ba660a5	"Breez’s Point-of-Sale Mode: A New Tool for the Day after Tomorrow"

