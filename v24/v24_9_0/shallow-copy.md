## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,706,208|12353976|
|{ ...object, __proto__: null }|2,359,645|1180748|
|{ ...object, newProp: true }|23,531,552|11765780|
|structuredClone|291,433|145717|
|JSON.parse + JSON.stringify|312,694|156348|
|loop + object.keys starting with {}|1,730,555|865383|
|loop + object.keys starting with { __proto__: null }|933,491|466822|
|loop + object.keys starting with { randomProp: true }|684,452|342305|
|object.keys + reduce(FN, {})|1,780,388|890195|
|object.keys + reduce(FN, { __proto__: null })|945,635|472890|
|object.keys + reduce(FN, { newProp: true })|705,259|352692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:31:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12353976,"opsSec":24706208.779320948},{"name":"{ ...object, __proto__: null }","samples":1180748,"opsSec":2359645.5470848116},{"name":"{ ...object, newProp: true }","samples":11765780,"opsSec":23531552.98759721},{"name":"structuredClone","samples":145717,"opsSec":291433.8105680231},{"name":"JSON.parse + JSON.stringify","samples":156348,"opsSec":312694.0312783791},{"name":"loop + object.keys starting with {}","samples":865383,"opsSec":1730555.142239249},{"name":"loop + object.keys starting with { __proto__: null }","samples":466822,"opsSec":933491.4581608218},{"name":"loop + object.keys starting with { randomProp: true }","samples":342305,"opsSec":684452.3583017406},{"name":"object.keys + reduce(FN, {})","samples":890195,"opsSec":1780388.5507637195},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":472890,"opsSec":945635.0833147522},{"name":"object.keys + reduce(FN, { newProp: true })","samples":352692,"opsSec":705259.3806674362}]}-->
