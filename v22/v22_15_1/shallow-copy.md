## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,283,693|12644240|
|{ ...object, __proto__: null }|2,596,101|1298822|
|{ ...object, newProp: true }|23,435,743|11719251|
|structuredClone|287,509|143755|
|JSON.parse + JSON.stringify|295,739|147870|
|loop + object.keys starting with {}|1,705,904|852954|
|loop + object.keys starting with { __proto__: null }|922,355|461251|
|loop + object.keys starting with { randomProp: true }|661,094|330917|
|object.keys + reduce(FN, {})|1,764,381|882651|
|object.keys + reduce(FN, { __proto__: null })|927,834|463918|
|object.keys + reduce(FN, { newProp: true })|671,329|335717|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:58:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12644240,"opsSec":25283693.897879906},{"name":"{ ...object, __proto__: null }","samples":1298822,"opsSec":2596101.1526615797},{"name":"{ ...object, newProp: true }","samples":11719251,"opsSec":23435743.33178093},{"name":"structuredClone","samples":143755,"opsSec":287509.4439567354},{"name":"JSON.parse + JSON.stringify","samples":147870,"opsSec":295739.86395966256},{"name":"loop + object.keys starting with {}","samples":852954,"opsSec":1705904.5336019876},{"name":"loop + object.keys starting with { __proto__: null }","samples":461251,"opsSec":922355.5336306816},{"name":"loop + object.keys starting with { randomProp: true }","samples":330917,"opsSec":661094.7677972177},{"name":"object.keys + reduce(FN, {})","samples":882651,"opsSec":1764381.1024561462},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":463918,"opsSec":927834.1424760468},{"name":"object.keys + reduce(FN, { newProp: true })","samples":335717,"opsSec":671329.809613548}]}-->
