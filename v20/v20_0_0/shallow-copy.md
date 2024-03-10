## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,211,969|93|
|{ ...object, __proto__: null }|26,876,258|95|
|{ ...object, newProp: true }|845,380|92|
|structuredClone|253,750|95|
|JSON.parse + JSON.stringify|174,184|97|
|loop + object.keys starting with {}|1,457,271|94|
|loop + object.keys starting with { __proto__: null }|769,030|93|
|loop + object.keys starting with { randomProp: true }|613,058|94|
|object.keys + reduce(FN, {})|570,548|96|
|object.keys + reduce(FN, { __proto__: null })|774,853|95|
|object.keys + reduce(FN, { newProp: true })|617,300|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26211969.145927154,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":26876257.516975548,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":845380.4132052643,"samples":3},{"name":"structuredClone","opsSec":253749.7535141092,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":174183.79884858854,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1457271.0823472533,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":769029.9985283656,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":613058.4815872835,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":570548.3417061786,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":774852.7203878431,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":617300.1514280981,"samples":6}]}-->
