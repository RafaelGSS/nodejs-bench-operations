## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,410,336|89|
|{ ...object, __proto__: null }|21,471,029|95|
|{ ...object, newProp: true }|664,119|89|
|structuredClone|195,016|98|
|JSON.parse + JSON.stringify|143,682|94|
|loop + object.keys starting with {}|1,156,373|96|
|loop + object.keys starting with { __proto__: null }|596,479|91|
|loop + object.keys starting with { randomProp: true }|451,094|92|
|object.keys + reduce(FN, {})|433,975|93|
|object.keys + reduce(FN, { __proto__: null })|614,840|92|
|object.keys + reduce(FN, { newProp: true })|450,314|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20410335.816478197,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21471028.549336005,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":664119.0035461074,"samples":3},{"name":"structuredClone","opsSec":195016.2697689677,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":143681.91209112125,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1156372.555159932,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":596478.7641211303,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":451093.94345376705,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":433974.89039209706,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":614840.1327644103,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":450314.3117779,"samples":5}]}-->
