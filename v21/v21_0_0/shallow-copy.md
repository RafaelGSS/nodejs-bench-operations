## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,230,391|92|
|{ ...object, __proto__: null }|2,504,064|95|
|{ ...object, newProp: true }|27,796,549|95|
|structuredClone|258,247|94|
|JSON.parse + JSON.stringify|234,140|97|
|loop + object.keys starting with {}|1,472,067|95|
|loop + object.keys starting with { __proto__: null }|785,911|94|
|loop + object.keys starting with { randomProp: true }|637,641|93|
|object.keys + reduce(FN, {})|615,156|94|
|object.keys + reduce(FN, { __proto__: null })|803,886|91|
|object.keys + reduce(FN, { newProp: true })|637,076|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":30230390.85454098,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":2504064.0610758387,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":27796549.224317282,"samples":6},{"name":"structuredClone","opsSec":258246.7470602631,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":234139.74634877805,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1472067.4533420578,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":785910.5669302178,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":637640.7368025064,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":615156.3953766535,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":803886.0964072663,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":637075.5013332972,"samples":6}]}-->
