## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,046,274|95|
|{ ...object, __proto__: null }|20,416,910|98|
|{ ...object, newProp: true }|768,854|92|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|207,772|98|
|loop + object.keys starting with {}|542,235|100|
|loop + object.keys starting with { __proto__: null }|839,828|98|
|loop + object.keys starting with { randomProp: true }|574,213|98|
|object.keys + reduce(FN, {})|546,640|100|
|object.keys + reduce(FN, { __proto__: null })|855,539|97|
|object.keys + reduce(FN, { newProp: true })|574,743|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":20046274.043922573,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20416910.36195846,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":768854.0645908923,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":207772.3805998663,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":542235.4315519489,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":839827.7945724071,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":574213.4249297562,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":546640.3214867279,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":855539.1492102519,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":574743.0817612516,"samples":6}]}-->
