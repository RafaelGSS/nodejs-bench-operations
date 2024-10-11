## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,974,899|10487453|
|{ ...object, __proto__: null }|20,709,427|10356416|
|{ ...object, newProp: true }|787,462|395092|
|structuredClone|290,566|145284|
|JSON.parse + JSON.stringify|197,292|98648|
|loop + object.keys starting with {}|1,551,480|776157|
|loop + object.keys starting with { __proto__: null }|835,771|417886|
|loop + object.keys starting with { randomProp: true }|625,861|313122|
|object.keys + reduce(FN, {})|1,593,713|796859|
|object.keys + reduce(FN, { __proto__: null })|866,067|433035|
|object.keys + reduce(FN, { newProp: true })|619,391|309810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:49:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":20974899.749479875,"samples":10487453},{"name":"{ ...object, __proto__: null }","opsSec":20709427.16308012,"samples":10356416},{"name":"{ ...object, newProp: true }","opsSec":787462.3176154951,"samples":395092},{"name":"structuredClone","opsSec":290566.3315681242,"samples":145284},{"name":"JSON.parse + JSON.stringify","opsSec":197292.38718180594,"samples":98648},{"name":"loop + object.keys starting with {}","opsSec":1551480.867186168,"samples":776157},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":835771.3079813571,"samples":417886},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":625861.7111495957,"samples":313122},{"name":"object.keys + reduce(FN, {})","opsSec":1593713.3782312032,"samples":796859},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":866067.3550302978,"samples":433035},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":619391.82348493,"samples":309810}]}-->
