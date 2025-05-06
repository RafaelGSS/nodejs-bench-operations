## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,905,930|12454213|
|{ ...object, __proto__: null }|2,538,744|1269374|
|{ ...object, newProp: true }|22,795,004|11397576|
|structuredClone|278,914|139496|
|JSON.parse + JSON.stringify|281,161|140642|
|loop + object.keys starting with {}|1,611,150|805613|
|loop + object.keys starting with { __proto__: null }|889,140|444662|
|loop + object.keys starting with { randomProp: true }|636,703|318582|
|object.keys + reduce(FN, {})|1,688,122|844163|
|object.keys + reduce(FN, { __proto__: null })|874,292|437697|
|object.keys + reduce(FN, { newProp: true })|605,963|303071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:43:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12454213,"opsSec":24905930.674805693},{"name":"{ ...object, __proto__: null }","samples":1269374,"opsSec":2538744.090334101},{"name":"{ ...object, newProp: true }","samples":11397576,"opsSec":22795004.47073107},{"name":"structuredClone","samples":139496,"opsSec":278914.95643724315},{"name":"JSON.parse + JSON.stringify","samples":140642,"opsSec":281161.26298690075},{"name":"loop + object.keys starting with {}","samples":805613,"opsSec":1611150.656150716},{"name":"loop + object.keys starting with { __proto__: null }","samples":444662,"opsSec":889140.1418231935},{"name":"loop + object.keys starting with { randomProp: true }","samples":318582,"opsSec":636703.6250768518},{"name":"object.keys + reduce(FN, {})","samples":844163,"opsSec":1688122.5272155497},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":437697,"opsSec":874292.2588614114},{"name":"object.keys + reduce(FN, { newProp: true })","samples":303071,"opsSec":605963.2711331793}]}-->
