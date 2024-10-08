## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,022,106|12011054|
|{ ...object, __proto__: null }|2,582,515|1291288|
|{ ...object, newProp: true }|21,029,476|10515371|
|structuredClone|290,678|145476|
|JSON.parse + JSON.stringify|291,641|145828|
|loop + object.keys starting with {}|1,638,653|819327|
|loop + object.keys starting with { __proto__: null }|875,324|437826|
|loop + object.keys starting with { randomProp: true }|656,852|328499|
|object.keys + reduce(FN, {})|1,720,185|860171|
|object.keys + reduce(FN, { __proto__: null })|910,959|455511|
|object.keys + reduce(FN, { newProp: true })|699,667|349887|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":24022106.126275722,"samples":12011054},{"name":"{ ...object, __proto__: null }","opsSec":2582515.403858564,"samples":1291288},{"name":"{ ...object, newProp: true }","opsSec":21029476.193768945,"samples":10515371},{"name":"structuredClone","opsSec":290678.8943888503,"samples":145476},{"name":"JSON.parse + JSON.stringify","opsSec":291641.8197914381,"samples":145828},{"name":"loop + object.keys starting with {}","opsSec":1638653.960672305,"samples":819327},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":875324.6863387387,"samples":437826},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656852.4874684511,"samples":328499},{"name":"object.keys + reduce(FN, {})","opsSec":1720185.9722515729,"samples":860171},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":910959.2440176795,"samples":455511},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":699667.2307805829,"samples":349887}]}-->
