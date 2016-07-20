# Keys

[Site](https://trystal.net/) |
[Docs](https://trystal.net/) |
[Twitter](https://twitter.com/trystalnet) |
[Chat](https://gitter.im/trystal/trystal)

In our application development we found that we frequently code the same 
combinations over and over -- CTRL-B for example.

This module maps the key combinations we use in Trystal/Linelo apps,
so that external code can pass in raw key data (e.g. {code:65, ctrl:true}) 
etc. and get back an enum (CTRLA) that can be concisely used in a case statement. 

