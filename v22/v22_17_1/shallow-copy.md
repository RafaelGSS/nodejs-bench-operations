## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,156,880|12579738|
|{ ...object, __proto__: null }|2,565,735|1282878|
|{ ...object, newProp: true }|23,277,621|11638814|
|structuredClone|293,182|146599|
|JSON.parse + JSON.stringify|308,584|154314|
|loop + object.keys starting with {}|1,705,771|852886|
|loop + object.keys starting with { __proto__: null }|926,134|463128|
|loop + object.keys starting with { randomProp: true }|662,971|331548|
|object.keys + reduce(FN, {})|1,766,141|883155|
|object.keys + reduce(FN, { __proto__: null })|962,449|481429|
|object.keys + reduce(FN, { newProp: true })|659,504|329877|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:59:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12579738,"opsSec":25156880.715557862},{"name":"{ ...object, __proto__: null }","samples":1282878,"opsSec":2565735.864104938},{"name":"{ ...object, newProp: true }","samples":11638814,"opsSec":23277621.85470783},{"name":"structuredClone","samples":146599,"opsSec":293182.23207319464},{"name":"JSON.parse + JSON.stringify","samples":154314,"opsSec":308584.2125174122},{"name":"loop + object.keys starting with {}","samples":852886,"opsSec":1705771.696372638},{"name":"loop + object.keys starting with { __proto__: null }","samples":463128,"opsSec":926134.0596329045},{"name":"loop + object.keys starting with { randomProp: true }","samples":331548,"opsSec":662971.1771127156},{"name":"object.keys + reduce(FN, {})","samples":883155,"opsSec":1766141.5630791292},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":481429,"opsSec":962449.3594011881},{"name":"object.keys + reduce(FN, { newProp: true })","samples":329877,"opsSec":659504.4646147327}]}-->
