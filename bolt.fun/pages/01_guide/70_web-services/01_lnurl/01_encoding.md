---
layout: guide
title: URL Encoding
parent: LNURL
grand_parent: Web Services
description: All URLs following LNURL spec need to be encoded in the same way as BOLT11 invoices are.
nav_order: 15
has_children: false
permalink: /guide/web-services/lnurl/encoding
main_classes: -no-top-padding
---

# URLs as Lightning invoices (bech32)

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

## Libraries

Below are a list of libraries for encoding and decoding LNURLs.

<ul>
    <li><a href="https://github.com/fiatjaf/go-lnurl">go-lnurl</a> &ndash; lnurl helper structs, encode/decode, verify signatures, misc helpers.</li>
    <li><a href="https://github.com/chill117/lnurl-platformio">lnurl-platformio</a> &ndash; Implementation of lnurl in C++ for PlatformIO.</li>
    <li><a href="https://github.com/fiatjaf/js-lnurl">js-lnurl</a> &ndash; Tools for adding lnurl support in a JavaScript wallet.</li>
    <li><a href="https://github.com/tkijewski/php-lnurl">php-lnurl</a> &ndash; Easy PHP encoding and decoding of bech32 lnurls.</li>
    <li><a href="https://github.com/python-ln/lnurl">python-lnurl</a> &ndash; Tools for dealing with lnurl in Python.</li>
    <li><a href="https://github.com/bumi/lnurl-ruby">lnurl-ruby</a> &ndash; A gem that provides helpers to work with lnurl from Ruby.</li>
    <li><a href="https://github.com/edouardparis/rust-lnurl">lnurl-rust</a> &ndash; Rust helpers for lnurl.</li>
    <li><a href="https://github.com/bottlepay/dart_lnurl">dart_lnurl</a> &ndash; Library for lnurl in Dart.</li>
</ul>
