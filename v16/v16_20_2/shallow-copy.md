## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,039,677|92|
|{ ...object, __proto__: null }|14,391,540|97|
|{ ...object, newProp: true }|521,480|88|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|143,037|97|
|loop + object.keys starting with {}|385,713|98|
|loop + object.keys starting with { __proto__: null }|557,763|93|
|loop + object.keys starting with { randomProp: true }|393,361|92|
|object.keys + reduce(FN, {})|389,417|94|
|object.keys + reduce(FN, { __proto__: null })|577,131|94|
|object.keys + reduce(FN, { newProp: true })|400,561|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14039677.067927351,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":14391540.359209739,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":521480.130737263,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":143036.65389089123,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":385713.1647955731,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":557762.8088494529,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":393361.1241942537,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":389416.87719699653,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":577131.3464916376,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":400561.20938167785,"samples":6}]}-->
