## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,260,269|12146426|
|{ ...object, __proto__: null }|2,261,286|1130824|
|{ ...object, newProp: true }|22,706,031|11354374|
|structuredClone|282,446|141244|
|JSON.parse + JSON.stringify|301,854|150991|
|loop + object.keys starting with {}|1,692,155|846078|
|loop + object.keys starting with { __proto__: null }|910,209|455152|
|loop + object.keys starting with { randomProp: true }|660,234|330191|
|object.keys + reduce(FN, {})|1,748,792|874425|
|object.keys + reduce(FN, { __proto__: null })|938,263|469225|
|object.keys + reduce(FN, { newProp: true })|645,479|322843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:06:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12146426,"opsSec":24260269.826855518},{"name":"{ ...object, __proto__: null }","samples":1130824,"opsSec":2261286.709699818},{"name":"{ ...object, newProp: true }","samples":11354374,"opsSec":22706031.586617164},{"name":"structuredClone","samples":141244,"opsSec":282446.09742677014},{"name":"JSON.parse + JSON.stringify","samples":150991,"opsSec":301854.26312405674},{"name":"loop + object.keys starting with {}","samples":846078,"opsSec":1692155.6108042097},{"name":"loop + object.keys starting with { __proto__: null }","samples":455152,"opsSec":910209.5202517979},{"name":"loop + object.keys starting with { randomProp: true }","samples":330191,"opsSec":660234.1973316486},{"name":"object.keys + reduce(FN, {})","samples":874425,"opsSec":1748792.5801444235},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":469225,"opsSec":938263.5276299918},{"name":"object.keys + reduce(FN, { newProp: true })","samples":322843,"opsSec":645479.7124296641}]}-->
