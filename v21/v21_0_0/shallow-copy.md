## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,704,572|93|
|{ ...object, __proto__: null }|1,462,626|100|
|{ ...object, newProp: true }|21,483,781|93|
|structuredClone|183,723|95|
|JSON.parse + JSON.stringify|186,468|97|
|loop + object.keys starting with {}|840,257|98|
|loop + object.keys starting with { __proto__: null }|464,674|93|
|loop + object.keys starting with { randomProp: true }|378,494|95|
|object.keys + reduce(FN, {})|366,221|96|
|object.keys + reduce(FN, { __proto__: null })|466,684|94|
|object.keys + reduce(FN, { newProp: true })|370,513|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":23704572.203651957,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":1462626.4569974067,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":21483780.5166368,"samples":5},{"name":"structuredClone","opsSec":183722.82607842083,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":186467.74812313498,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":840257.4081004761,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":464674.1596876341,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":378494.23981029686,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":366221.3527400278,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":466683.99717624666,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":370512.77400479495,"samples":5}]}-->
