## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,070,582|12537512|
|{ ...object, __proto__: null }|2,584,045|1292120|
|{ ...object, newProp: true }|22,985,428|11497643|
|structuredClone|317,833|158957|
|JSON.parse + JSON.stringify|301,816|150909|
|loop + object.keys starting with {}|1,712,358|856336|
|loop + object.keys starting with { __proto__: null }|883,095|441611|
|loop + object.keys starting with { randomProp: true }|647,921|323990|
|object.keys + reduce(FN, {})|1,781,189|890695|
|object.keys + reduce(FN, { __proto__: null })|916,400|458261|
|object.keys + reduce(FN, { newProp: true })|642,928|321465|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12537512,"opsSec":25070582.54573736},{"name":"{ ...object, __proto__: null }","samples":1292120,"opsSec":2584045.405876665},{"name":"{ ...object, newProp: true }","samples":11497643,"opsSec":22985428.928658232},{"name":"structuredClone","samples":158957,"opsSec":317833.3555070405},{"name":"JSON.parse + JSON.stringify","samples":150909,"opsSec":301816.1498670013},{"name":"loop + object.keys starting with {}","samples":856336,"opsSec":1712358.2548711097},{"name":"loop + object.keys starting with { __proto__: null }","samples":441611,"opsSec":883095.6978870968},{"name":"loop + object.keys starting with { randomProp: true }","samples":323990,"opsSec":647921.7440601481},{"name":"object.keys + reduce(FN, {})","samples":890695,"opsSec":1781189.2492844702},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":458261,"opsSec":916400.9141144162},{"name":"object.keys + reduce(FN, { newProp: true })","samples":321465,"opsSec":642928.6009873643}]}-->
