# Coinjoin Process

## Events

### Start

1. Connect to the coordinator
2. See how many rounds are active

### Check Active Rounds

- Fee Rate
- List of Preferred Denominations

Rounds have a fee rate
Maximum input number

### Request Registration

Every registration request needs you to present credentials.

- Request 0 credentials
- 0 credentials have no value

### Input Registration

- Show coordinator the inputs (outputs )
- Prove you can spend it (sign round params)
- Show crednetials (0 credntials at first)
- Difference = Sum(10000 * )

### Connection Confriamtion

- Keep telling the server that you're interested in the round — so others don't rely on your inputs if you are not available.
  - How often must this be done?

### Output Registration Phase

- Everyone needs to query the status once more
  - They learn all of the input signatures
    - They want to know that everyone is seeing the same key for the server
      - They wanna make sure everyones inputs is legit
        - Everyone gets the signatures and verify them
          - Then register outputs
            - Same like registering inputs except it is negative
              - Credentials as change
                - Prove output amount is the same as the presented and requested credentials
                  - Everyone runs out of credentials
                    - All of the outputs are registered

### Transaction Signing

1. Now the round proceeds to transaction signing
2. They check for their own outputs, and sign for everyone of their inputs

### Broadcast

1. Coordinator broadcasts transactions with all signatures

---



## Challenges

### Time-staggered batched coinjoin payments

- what is the problem
- what is the proposed flow
- what is the goals

### Handling Change

Change after a mix poses a problem as it can be tracked — so how do you dispose of very small outputs?

#### WabiSabi

- Dispose them through the coordinator — so someone doesnt know what charitiy. `wabisabi`

- - Change can be tracked

- Fee Credentials

- Prepaid Fees

- Opt in to donations using change


### Coin Selection

- Wallet is able to select intelegently for you in cost effeicent ways but pershaps not in private ways because it does not understand the meaning of the labels.
- High anonimity coins can be auto-selected.