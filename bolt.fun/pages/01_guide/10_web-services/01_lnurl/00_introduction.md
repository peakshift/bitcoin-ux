---
layout: guide
title: LNURL
parent: Web Services
description: LNURL is an open standard for communicating with a Lightning node through HTTP.
nav_order: 10
has_children: true
permalink: /guide/web-services/lnurl
main_classes: -no-top-padding
---

# LNURL - API to automate node operations

LNURL allows web services to use Lightning Network functionality in their API endpoints that clients who have implemented one or more of the various flows can interact with autonomously. The client can be a wallet application or even another web service.

Several "Flows" are currently part of the LNURL specifications. They are; Pay, Withdraw, Channel, and Auth. These Flows automate some otherwise manual steps for certain Lightning Network-based operations and standardize the HTTP request and responses.

## URLs as Lightning invoices (bech32)

LNURL endpoints are all encoded with [bech32](https://en.bitcoin.it/wiki/Bech32) which is the same as bitcoin addresses and [standard lightning invoices]({{ "/guide/invoices" | relative_url }}). Encoding endpoints like this allows for easy integration into existing LN services/apps since most of these would already have functionality built in to receive/send and encode/decode bech32 values.

For example, this endpoint:
```
https://service.com/api?q=3fc3645b439ce8e7f2553a69e5267081d96dcd340693afabe04be7b0ccd178df
```

Would be encoded to:
```
LNURL1DP68GURN8GHJ7UM9WFMXJCM99E3K7MF0V9CXJ0M385EKVCENXC6R2C35XVUKXEFCV5MKVV34X5EKZD3EV56NYD3HXQURZEPEXEJXXEPNXSCRVWFNV9NXZCN9XQ6XYEFHVGCXXCMYXYMNSERXFQ5FNS
```

When an LNURL-enabled app receives an LNURL-specific bech32 string, it would decode the string to get the URL and then send the appropriate requests to start the relevant LNURL flow.

<details style="margin-top: 1rem;">
  <summary><strong>Encoding/Decoding Libraries</strong></summary>
  <ul>
    <li><a href="https://github.com/fiatjaf/go-lnurl">go-lnurl</a> &ndash; <strong>lnurl</strong> helper structs, encode/decode, verify signatures, misc helpers.</li>
    <li><a href="https://github.com/chill117/lnurl-platformio">lnurl-platformio</a> &ndash; Implementation of lnurl in C++ for PlatformIO (software tooling for hardware devices).</li>
    <li><a href="https://github.com/fiatjaf/js-lnurl">js-lnurl</a> &ndash; Tools for adding <strong>lnurl</strong> support in a JavaScript wallet.</li>
    <li><a href="https://github.com/tkijewski/php-lnurl">php-lnurl</a> &ndash; Easy PHP encoding and decoding of bech32 <strong>lnurl</strong>s.</li>
    <li><a href="https://github.com/python-ln/lnurl">python-lnurl</a> &ndash; Tools for dealing with <strong>lnurl</strong> in Python.</li>
    <li><a href="https://github.com/bumi/lnurl-ruby">lnurl-ruby</a> &ndash; A gem that provides helpers to work with <strong>lnurl</strong> from Ruby.</li>
    <li><a href="https://github.com/edouardparis/rust-lnurl">lnurl-rust</a> &ndash; Rust helpers for <strong>lnurl</strong>.</li>
    <li><a href="https://github.com/bottlepay/dart_lnurl">dart_lnurl</a> &ndash; Library for <strong>lnurl</strong> in Dart.</li>
  </ul>
</details>

## LNURL Flows

### [Pay]({{ "/guide/web-services/lnurl/pay" }})
API for a service to generate invoices given some parameters.

---

### [Withdraw]({{ "/guide/web-services/lnurl/withdraw" }})
API to automate the withdrawl of funds from a service that has been allocated to the requesting client.

---

### [Channel]({{ "/guide/web-services/lnurl/channel" }})
API to request the creation of incoming channels with the service.

---

### [Auth]({{ "/guide/web-services/lnurl/auth" }}) (comming soon)
For securely logging in to some service

---

<!--
TODO

### [Playground](https://www.oauth.com/playground/device-code.html)
Progressively implement flows a la this playground example

-->