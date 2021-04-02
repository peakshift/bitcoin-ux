# Design Language

> A **design language** or **design vocabulary** is an overarching scheme or style that guides the design of a complement of products or architectural settings.[^4]

- Why does bitcoin need a design language?
- Guidelines not strict rules.
- This collection of abstractions form a language.

#### A Pattern Language: Towns, Buildings, Construction

- Patterns live in a context.
- Spreading means to provide inspiration and identify problems and solutions.
- Making things recognisable.

#### TheUXConf 2020 | Design Language Systems | Hayley Hughes | Shopify[^1]

- Aim for unity not uniformity**
- Strive for unity — Eliot Noyes, Described by Gordon Bruce
  - "Unitiy is a family of ideas, that are held together by execlence…"
  - "Uniformity being more about following a consistent style like being a miliary branch…"
- Pattern libraries and UI kits tend to move you towards uniformity.
- Design language has to cater for a variety of cases.
  - Social payments applications may need Contacts, but something like Specter may need "Devices" instead

#### What Is Abstraction?[^2]

- An abstraction is a general representation of something.
- Abstractions are formed by including only those details needed to make the abstraction useful to us in some way.
- Example: *A map is an abstraction, it contains less information of the world that it represents. We create a map by including only those details that help us acheive the purpose of drawing the map.*
- The most abstract abstractions are words. There is no visual simmilarity with what a word represents — it contains no specific information about the object other than its definition.
- Learning that words represent things is fundimental in learning to speak and read.
  - Learning these bitcoin design abstractions help you build the same mental model to speak about and design bitcoin experiences.
    - Giving you the abilitiy to speak is goal of these abstraction because people building software at each level, people have varying degrees of understanding about bitcoin. Every conversation with a designer starts at such a low level, they're often lost. Having a language that can allow you to communicate cross deciplines can help us have more synergy*.
    - Designers often start by collecting references and inspirations from interfaces that already exist. The design process takes longer when there is no references to pull from. We know the specs are important but many times we are still searching for practical use cases.
      - As innovation are made, specs get created and the time to reach a use case is a long one. Bitcoin being heavily developer driven, these advancements are usually from developers then itterated on by designers.
      - Why can't you rely on this? Because many things live in specs still and have not seen any practical implementations or those which have the connections have not yet been made by UX professionals.
- Procedures
  - Simplify a process.
  - Automate the steps in the background.
  - User is only concerned about the result.

#### Consider our word choices

- Language that you use to describe something paints a picture and can lead to more confusion. Especially when you have to unlearn some concepts.
- Is this going to add to the confusion in understanding bitcoin?

## Case Study

Say you're a designer who wants to design an app that allows friends to save money together?

#### Components

Setup

- Participants
- Multisig
- One coordinator (the one who initiates the creation of the multisig)
- New multisig address
- Output descriptors (which is already an abstraction on the derivation path and xpub)

Spending funds

- Partially Signed Bitcoin Transaction

#### Other UX Questions

- Are the funds already available in the wallet?

[1]: https://www.youtube.com/watch?v=YFjLe5mBm_A	"TheUXConf 2020 | Design Language Systems | Hayley Hughes | Shopify"

[2]: https://www.youtube.com/watch?v=XpJdZrviSuw	"What Is Abstraction?"
[3]: https://uxdesign.cc/ux-ui-analysis-of-currency-design-fce69fc569f8	"UX/UI analysis of currency design"
[4]: https://en.wikipedia.org/wiki/Design_language	"Wikipedia — Design language"

