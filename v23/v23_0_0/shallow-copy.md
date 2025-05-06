## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,396,054|12199997|
|{ ...object, __proto__: null }|2,502,226|1251801|
|{ ...object, newProp: true }|22,750,886|11382075|
|structuredClone|305,569|152786|
|JSON.parse + JSON.stringify|281,137|140574|
|loop + object.keys starting with {}|1,671,797|836085|
|loop + object.keys starting with { __proto__: null }|853,313|426677|
|loop + object.keys starting with { randomProp: true }|609,830|304986|
|object.keys + reduce(FN, {})|1,715,853|858121|
|object.keys + reduce(FN, { __proto__: null })|869,264|434697|
|object.keys + reduce(FN, { newProp: true })|612,186|306096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12199997,"opsSec":24396054.13484144},{"name":"{ ...object, __proto__: null }","samples":1251801,"opsSec":2502226.881199622},{"name":"{ ...object, newProp: true }","samples":11382075,"opsSec":22750886.324276496},{"name":"structuredClone","samples":152786,"opsSec":305569.77911884536},{"name":"JSON.parse + JSON.stringify","samples":140574,"opsSec":281137.9976723188},{"name":"loop + object.keys starting with {}","samples":836085,"opsSec":1671797.0922841893},{"name":"loop + object.keys starting with { __proto__: null }","samples":426677,"opsSec":853313.7201791528},{"name":"loop + object.keys starting with { randomProp: true }","samples":304986,"opsSec":609830.3839685741},{"name":"object.keys + reduce(FN, {})","samples":858121,"opsSec":1715853.520467845},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":434697,"opsSec":869264.4291827148},{"name":"object.keys + reduce(FN, { newProp: true })","samples":306096,"opsSec":612186.1891286928}]}-->
