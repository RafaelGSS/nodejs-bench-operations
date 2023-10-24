## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,178,318|91|
|{ ...object, __proto__: null }|15,677,670|97|
|{ ...object, newProp: true }|465,285|80|
|structuredClone|179,656|96|
|JSON.parse + JSON.stringify|150,899|95|
|loop + object.keys starting with {}|679,826|97|
|loop + object.keys starting with { __proto__: null }|437,197|88|
|loop + object.keys starting with { randomProp: true }|322,723|93|
|object.keys + reduce(FN, {})|311,072|94|
|object.keys + reduce(FN, { __proto__: null })|442,319|89|
|object.keys + reduce(FN, { newProp: true })|329,583|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15178317.729433611,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":15677669.53815083,"samples":8},{"name":"{ ...object, newProp: true }","opsSec":465285.02843899664,"samples":3},{"name":"structuredClone","opsSec":179655.76568335446,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":150898.99094325223,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":679826.4686805109,"samples":9},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":437196.585564622,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":322723.29908568953,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":311071.5201429392,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":442319.38210220524,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":329583.4134953031,"samples":5}]}-->
