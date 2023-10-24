## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|17,993,306|93|
|{ ...object, __proto__: null }|18,263,813|92|
|{ ...object, newProp: true }|505,116|78|
|structuredClone|163,135|92|
|JSON.parse + JSON.stringify|128,064|92|
|loop + object.keys starting with {}|747,562|89|
|loop + object.keys starting with { __proto__: null }|433,863|87|
|loop + object.keys starting with { randomProp: true }|332,841|91|
|object.keys + reduce(FN, {})|316,317|93|
|object.keys + reduce(FN, { __proto__: null })|435,486|91|
|object.keys + reduce(FN, { newProp: true })|335,643|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":17993305.533035,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":18263812.55831358,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":505116.1509282568,"samples":3},{"name":"structuredClone","opsSec":163134.92759916163,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":128064.24797051572,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":747562.482146763,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":433863.3422753403,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":332841.08950512315,"samples":9},{"name":"object.keys + reduce(FN, {})","opsSec":316316.97890501766,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":435485.5879141273,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":335642.9315292094,"samples":4}]}-->
