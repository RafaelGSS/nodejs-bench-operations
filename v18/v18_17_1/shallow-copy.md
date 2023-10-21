## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,106,684|93|
|{ ...object, __proto__: null }|15,274,991|95|
|{ ...object, newProp: true }|449,041|78|
|structuredClone|178,343|96|
|JSON.parse + JSON.stringify|143,616|91|
|loop + object.keys starting with {}|670,125|96|
|loop + object.keys starting with { __proto__: null }|413,038|96|
|loop + object.keys starting with { randomProp: true }|305,773|94|
|object.keys + reduce(FN, {})|293,787|94|
|object.keys + reduce(FN, { __proto__: null })|411,605|95|
|object.keys + reduce(FN, { newProp: true })|313,683|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15106684.44706906,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15274990.712962182,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":449041.0319354011,"samples":3},{"name":"structuredClone","opsSec":178343.02407880692,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143616.160702538,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":670124.5119239046,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":413038.25979211787,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":305772.6044440031,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":293787.4716147355,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":411604.5858491956,"samples":9},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":313683.3836347075,"samples":5}]}-->
