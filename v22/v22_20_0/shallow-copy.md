## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,077,148|12576572|
|{ ...object, __proto__: null }|2,659,544|1329773|
|{ ...object, newProp: true }|23,140,485|11573129|
|structuredClone|293,877|146940|
|JSON.parse + JSON.stringify|310,672|155359|
|loop + object.keys starting with {}|1,720,001|860074|
|loop + object.keys starting with { __proto__: null }|912,203|456165|
|loop + object.keys starting with { randomProp: true }|672,151|336102|
|object.keys + reduce(FN, {})|1,795,307|898042|
|object.keys + reduce(FN, { __proto__: null })|984,592|492536|
|object.keys + reduce(FN, { newProp: true })|698,326|349255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:33:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12576572,"opsSec":25077148.653935898},{"name":"{ ...object, __proto__: null }","samples":1329773,"opsSec":2659544.824481188},{"name":"{ ...object, newProp: true }","samples":11573129,"opsSec":23140485.281979617},{"name":"structuredClone","samples":146940,"opsSec":293877.6572073168},{"name":"JSON.parse + JSON.stringify","samples":155359,"opsSec":310672.40385397593},{"name":"loop + object.keys starting with {}","samples":860074,"opsSec":1720001.5040318987},{"name":"loop + object.keys starting with { __proto__: null }","samples":456165,"opsSec":912203.9589545834},{"name":"loop + object.keys starting with { randomProp: true }","samples":336102,"opsSec":672151.9391437056},{"name":"object.keys + reduce(FN, {})","samples":898042,"opsSec":1795307.9853045843},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":492536,"opsSec":984592.4581816125},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349255,"opsSec":698326.5468228434}]}-->
