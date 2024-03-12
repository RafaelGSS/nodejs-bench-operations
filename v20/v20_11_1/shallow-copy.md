## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,882,858|93|
|{ ...object, __proto__: null }|27,313,915|95|
|{ ...object, newProp: true }|908,876|90|
|structuredClone|287,635|95|
|JSON.parse + JSON.stringify|174,817|97|
|loop + object.keys starting with {}|1,446,735|92|
|loop + object.keys starting with { __proto__: null }|795,422|97|
|loop + object.keys starting with { randomProp: true }|615,791|96|
|object.keys + reduce(FN, {})|583,464|97|
|object.keys + reduce(FN, { __proto__: null })|798,068|97|
|object.keys + reduce(FN, { newProp: true })|622,363|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":25882858.23892322,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27313914.777105942,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":908875.6742472594,"samples":3},{"name":"structuredClone","opsSec":287635.1253061397,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":174817.28186450552,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1446735.2749361994,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":795421.5530407667,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":615791.1312792045,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":583463.7405028443,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":798068.1025599233,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":622362.6389294681,"samples":4}]}-->
