## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,264,513|91|
|{ ...object, __proto__: null }|27,340,644|95|
|{ ...object, newProp: true }|904,794|89|
|structuredClone|288,971|96|
|JSON.parse + JSON.stringify|174,878|91|
|loop + object.keys starting with {}|591,746|96|
|loop + object.keys starting with { __proto__: null }|824,821|97|
|loop + object.keys starting with { randomProp: true }|629,904|95|
|object.keys + reduce(FN, {})|596,776|94|
|object.keys + reduce(FN, { __proto__: null })|831,405|96|
|object.keys + reduce(FN, { newProp: true })|630,800|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26264512.590294097,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27340643.97480787,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":904793.6563402594,"samples":3},{"name":"structuredClone","opsSec":288970.99069756747,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174878.02451849822,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":591746.2211291493,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":824821.2386218172,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":629904.0269821942,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":596775.6198354639,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":831404.6557442384,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":630800.4898947519,"samples":4}]}-->
