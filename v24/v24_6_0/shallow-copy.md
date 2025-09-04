## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,796,301|12399363|
|{ ...object, __proto__: null }|2,320,445|1160448|
|{ ...object, newProp: true }|23,393,770|11696899|
|structuredClone|282,106|141064|
|JSON.parse + JSON.stringify|296,307|148251|
|loop + object.keys starting with {}|1,690,506|845254|
|loop + object.keys starting with { __proto__: null }|880,517|440323|
|loop + object.keys starting with { randomProp: true }|643,255|321749|
|object.keys + reduce(FN, {})|1,744,799|872402|
|object.keys + reduce(FN, { __proto__: null })|913,255|456705|
|object.keys + reduce(FN, { newProp: true })|637,742|318872|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12399363,"opsSec":24796301.665586155},{"name":"{ ...object, __proto__: null }","samples":1160448,"opsSec":2320445.694308562},{"name":"{ ...object, newProp: true }","samples":11696899,"opsSec":23393770.53571339},{"name":"structuredClone","samples":141064,"opsSec":282106.3370543776},{"name":"JSON.parse + JSON.stringify","samples":148251,"opsSec":296307.9899731012},{"name":"loop + object.keys starting with {}","samples":845254,"opsSec":1690506.306112681},{"name":"loop + object.keys starting with { __proto__: null }","samples":440323,"opsSec":880517.7613932308},{"name":"loop + object.keys starting with { randomProp: true }","samples":321749,"opsSec":643255.3203518015},{"name":"object.keys + reduce(FN, {})","samples":872402,"opsSec":1744799.5647195063},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":456705,"opsSec":913255.7383202174},{"name":"object.keys + reduce(FN, { newProp: true })","samples":318872,"opsSec":637742.600792734}]}-->
