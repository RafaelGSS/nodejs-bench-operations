## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|12,769,480|93|
|{ ...object, __proto__: null }|12,422,515|88|
|{ ...object, newProp: true }|457,117|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|136,294|94|
|loop + object.keys starting with {}|310,160|93|
|loop + object.keys starting with { __proto__: null }|400,600|93|
|loop + object.keys starting with { randomProp: true }|326,815|94|
|object.keys + reduce(FN, {})|311,275|94|
|object.keys + reduce(FN, { __proto__: null })|400,419|92|
|object.keys + reduce(FN, { newProp: true })|326,439|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":12769479.56616206,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":12422514.7964855,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":457116.6352470675,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":136294.45080095617,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":310160.47978251736,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":400600.080927068,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":326815.02936307795,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":311274.62661665614,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":400419.21887664986,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326439.4684445226,"samples":6}]}-->
