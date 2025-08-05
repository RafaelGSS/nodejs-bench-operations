## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,812,337|12408269|
|{ ...object, __proto__: null }|2,379,841|1190001|
|{ ...object, newProp: true }|22,871,170|11435588|
|structuredClone|296,067|148034|
|JSON.parse + JSON.stringify|301,111|150581|
|loop + object.keys starting with {}|1,728,041|864187|
|loop + object.keys starting with { __proto__: null }|933,709|466923|
|loop + object.keys starting with { randomProp: true }|698,612|349307|
|object.keys + reduce(FN, {})|1,793,949|897051|
|object.keys + reduce(FN, { __proto__: null })|965,680|482929|
|object.keys + reduce(FN, { newProp: true })|717,309|358656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:38:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12408269,"opsSec":24812337.717846446},{"name":"{ ...object, __proto__: null }","samples":1190001,"opsSec":2379841.9984627594},{"name":"{ ...object, newProp: true }","samples":11435588,"opsSec":22871170.2364651},{"name":"structuredClone","samples":148034,"opsSec":296067.1952893632},{"name":"JSON.parse + JSON.stringify","samples":150581,"opsSec":301111.6691844958},{"name":"loop + object.keys starting with {}","samples":864187,"opsSec":1728041.7666899364},{"name":"loop + object.keys starting with { __proto__: null }","samples":466923,"opsSec":933709.5066094857},{"name":"loop + object.keys starting with { randomProp: true }","samples":349307,"opsSec":698612.549680347},{"name":"object.keys + reduce(FN, {})","samples":897051,"opsSec":1793949.3097984458},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":482929,"opsSec":965680.5021296256},{"name":"object.keys + reduce(FN, { newProp: true })","samples":358656,"opsSec":717309.7490820073}]}-->
