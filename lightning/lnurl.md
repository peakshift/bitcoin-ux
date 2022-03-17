# LNURL

- [ ] research AMP payments
- [ ] https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f

## Components

- lnurl-pay
- lnurl-withdraw
- lnurl-auth

## Use Case

lnurl-pay as an standard for online services to interact with each other automatically.

```mermaid
sequenceDiagram
    User->>Lottery: Deposits Money (lnurl-pay)
    Lottery-->>User: 💰 You won the prize!!
    User->>Lottery: Where's my money?
    User->>Custodial Storage: Secure my 💰
    Note over User, Custodial Storage: Here's the lnurl-withdraw to call
    Custodial Storage-->>Lottery: (lnurl-withdraw)
    Note over User, Custodial Storage: Don't want to forget my funds in the Lottery
    Custodial Storage-->>Phone Top Up: 10% (I make lots of calls)
    Custodial Storage-->>OnChain: 20% to HODL
```

— credit fiatjaf