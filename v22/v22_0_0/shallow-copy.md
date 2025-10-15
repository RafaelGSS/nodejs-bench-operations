## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,119,635|12559822|
|{ ...object, __proto__: null }|2,611,314|1305658|
|{ ...object, newProp: true }|23,235,854|11619340|
|structuredClone|310,903|155511|
|JSON.parse + JSON.stringify|308,235|154160|
|loop + object.keys starting with {}|1,698,789|849396|
|loop + object.keys starting with { __proto__: null }|923,110|461619|
|loop + object.keys starting with { randomProp: true }|666,095|333086|
|object.keys + reduce(FN, {})|1,764,028|882188|
|object.keys + reduce(FN, { __proto__: null })|953,340|476774|
|object.keys + reduce(FN, { newProp: true })|699,555|349803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12559822,"opsSec":25119635.66028096},{"name":"{ ...object, __proto__: null }","samples":1305658,"opsSec":2611314.7361236676},{"name":"{ ...object, newProp: true }","samples":11619340,"opsSec":23235854.798886713},{"name":"structuredClone","samples":155511,"opsSec":310903.5905021357},{"name":"JSON.parse + JSON.stringify","samples":154160,"opsSec":308235.49970364023},{"name":"loop + object.keys starting with {}","samples":849396,"opsSec":1698789.9002956834},{"name":"loop + object.keys starting with { __proto__: null }","samples":461619,"opsSec":923110.7233396873},{"name":"loop + object.keys starting with { randomProp: true }","samples":333086,"opsSec":666095.9025397103},{"name":"object.keys + reduce(FN, {})","samples":882188,"opsSec":1764028.1971445382},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":476774,"opsSec":953340.7475348489},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349803,"opsSec":699555.1493361947}]}-->
