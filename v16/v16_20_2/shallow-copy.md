## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,913,734|91|
|{ ...object, __proto__: null }|11,349,025|96|
|{ ...object, newProp: true }|428,253|85|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|120,619|95|
|loop + object.keys starting with {}|280,311|95|
|loop + object.keys starting with { __proto__: null }|364,263|97|
|loop + object.keys starting with { randomProp: true }|285,565|97|
|object.keys + reduce(FN, {})|282,284|96|
|object.keys + reduce(FN, { __proto__: null })|364,041|97|
|object.keys + reduce(FN, { newProp: true })|292,384|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":10913734.476816006,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":11349025.26084591,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":428253.01200958434,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":120619.06207701839,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":280311.35309943045,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":364262.8819470498,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":285564.9192385849,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":282284.21972786885,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":364040.9184767065,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":292384.3994137237,"samples":5}]}-->
