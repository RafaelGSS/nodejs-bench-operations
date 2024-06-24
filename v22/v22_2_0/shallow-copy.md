## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,577,542|5288772|
|{ ...object, __proto__: null }|2,280,674|1140338|
|{ ...object, newProp: true }|10,367,929|5183965|
|structuredClone|313,860|156931|
|JSON.parse + JSON.stringify|290,907|145454|
|loop + object.keys starting with {}|1,470,018|735010|
|loop + object.keys starting with { __proto__: null }|887,655|443828|
|loop + object.keys starting with { randomProp: true }|647,719|323860|
|object.keys + reduce(FN, {})|1,493,199|746600|
|object.keys + reduce(FN, { __proto__: null })|884,200|442101|
|object.keys + reduce(FN, { newProp: true })|700,927|350464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:03:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10577542.51915319,"samples":5288772},{"name":"{ ...object, __proto__: null }","opsSec":2280674.5722979726,"samples":1140338},{"name":"{ ...object, newProp: true }","opsSec":10367929.460868843,"samples":5183965},{"name":"structuredClone","opsSec":313860.4871924426,"samples":156931},{"name":"JSON.parse + JSON.stringify","opsSec":290907.8626914561,"samples":145454},{"name":"loop + object.keys starting with {}","opsSec":1470018.6505245664,"samples":735010},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":887655.2277400295,"samples":443828},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":647719.2551220884,"samples":323860},{"name":"object.keys + reduce(FN, {})","opsSec":1493199.2862519987,"samples":746600},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":884200.1396440713,"samples":442101},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700927.2640269855,"samples":350464}]}-->
