## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,707,963|10358483|
|{ ...object, __proto__: null }|20,795,598|10399988|
|{ ...object, newProp: true }|764,434|383573|
|structuredClone|262,461|131242|
|JSON.parse + JSON.stringify|198,151|99122|
|loop + object.keys starting with {}|1,489,080|744563|
|loop + object.keys starting with { __proto__: null }|718,005|359084|
|loop + object.keys starting with { randomProp: true }|541,791|270930|
|object.keys + reduce(FN, {})|1,510,979|755627|
|object.keys + reduce(FN, { __proto__: null })|754,805|377479|
|object.keys + reduce(FN, { newProp: true })|535,623|267831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10358483,"opsSec":20707963.502778653},{"name":"{ ...object, __proto__: null }","samples":10399988,"opsSec":20795598.85916973},{"name":"{ ...object, newProp: true }","samples":383573,"opsSec":764434.1377899564},{"name":"structuredClone","samples":131242,"opsSec":262461.9936116836},{"name":"JSON.parse + JSON.stringify","samples":99122,"opsSec":198151.36067216127},{"name":"loop + object.keys starting with {}","samples":744563,"opsSec":1489080.2584326214},{"name":"loop + object.keys starting with { __proto__: null }","samples":359084,"opsSec":718005.7522401663},{"name":"loop + object.keys starting with { randomProp: true }","samples":270930,"opsSec":541791.7710786845},{"name":"object.keys + reduce(FN, {})","samples":755627,"opsSec":1510979.071314058},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":377479,"opsSec":754805.6138042402},{"name":"object.keys + reduce(FN, { newProp: true })","samples":267831,"opsSec":535623.7253998304}]}-->
