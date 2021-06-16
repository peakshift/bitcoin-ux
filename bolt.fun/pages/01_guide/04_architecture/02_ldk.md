---
layout: guide
title: Lightning Development Kit (LDK)
parent: Architecture
description: Laying out the structure of the LDK
nav_order: 142
has_children: false
permalink: /guide/architecture/ldk
main_classes: -no-top-padding
---

# The Lightning Development Kit (LDK)

The LDK is a project seeking to disaggregate all the components of a Lightning node and make them available as pluggable libraries that can be included in a wide selection of environments. It takes the approach of defining _**core components**_ that are generally standard across all implementations of Lightning nodes, and _**battery components**_ that can be customised and plugged in by the developer to express different conditions and use-cases when building a node setup.

The diagram below taken from the [LDK docs](https://lightningdevkit.org/docs/#ldk-architecture) helps detail the different components made available by the LDK.

![ldk-architecture](/assets/images/ldk-architecture.svg)
