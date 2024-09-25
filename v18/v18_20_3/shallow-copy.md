## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,548,459|4274230|
|{ ...object, __proto__: null }|8,702,778|4351390|
|{ ...object, newProp: true }|561,812|281404|
|structuredClone|238,992|119497|
|JSON.parse + JSON.stringify|185,117|92613|
|loop + object.keys starting with {}|1,081,418|540710|
|loop + object.keys starting with { __proto__: null }|586,586|293294|
|loop + object.keys starting with { randomProp: true }|449,904|224953|
|object.keys + reduce(FN, {})|1,048,557|524279|
|object.keys + reduce(FN, { __proto__: null })|568,304|284153|
|object.keys + reduce(FN, { newProp: true })|449,366|224684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:46:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":8548459.9713709,"samples":4274230},{"name":"{ ...object, __proto__: null }","opsSec":8702778.763454389,"samples":4351390},{"name":"{ ...object, newProp: true }","opsSec":561812.1433043487,"samples":281404},{"name":"structuredClone","opsSec":238992.47200170855,"samples":119497},{"name":"JSON.parse + JSON.stringify","opsSec":185117.07427387737,"samples":92613},{"name":"loop + object.keys starting with {}","opsSec":1081418.568643123,"samples":540710},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":586586.4834065888,"samples":293294},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":449904.35271279264,"samples":224953},{"name":"object.keys + reduce(FN, {})","opsSec":1048557.3784290074,"samples":524279},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":568304.9400903813,"samples":284153},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":449366.3464833071,"samples":224684}]}-->
