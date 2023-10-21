## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,541,696|94|
|{ ...object, __proto__: null }|13,433,380|96|
|{ ...object, newProp: true }|500,709|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|143,481|90|
|loop + object.keys starting with {}|333,630|96|
|loop + object.keys starting with { __proto__: null }|418,214|93|
|loop + object.keys starting with { randomProp: true }|347,482|94|
|object.keys + reduce(FN, {})|337,059|96|
|object.keys + reduce(FN, { __proto__: null })|429,018|95|
|object.keys + reduce(FN, { newProp: true })|341,823|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":13541695.723837744,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":13433380.165856117,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":500709.1473328161,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":143480.58231552911,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":333630.4362506328,"samples":8},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":418214.4600441794,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":347482.17805170605,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":337059.0490812882,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":429018.4351377133,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":341822.5263661739,"samples":5}]}-->
