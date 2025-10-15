## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,903,365|12479755|
|{ ...object, __proto__: null }|2,637,727|1318865|
|{ ...object, newProp: true }|23,178,066|11589034|
|structuredClone|297,670|148837|
|JSON.parse + JSON.stringify|301,327|150689|
|loop + object.keys starting with {}|1,710,593|855302|
|loop + object.keys starting with { __proto__: null }|878,965|439520|
|loop + object.keys starting with { randomProp: true }|673,219|336610|
|object.keys + reduce(FN, {})|1,780,399|890239|
|object.keys + reduce(FN, { __proto__: null })|935,138|467609|
|object.keys + reduce(FN, { newProp: true })|699,399|349840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:30:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12479755,"opsSec":24903365.41248428},{"name":"{ ...object, __proto__: null }","samples":1318865,"opsSec":2637727.5996678844},{"name":"{ ...object, newProp: true }","samples":11589034,"opsSec":23178066.05304245},{"name":"structuredClone","samples":148837,"opsSec":297670.0713503983},{"name":"JSON.parse + JSON.stringify","samples":150689,"opsSec":301327.0684935749},{"name":"loop + object.keys starting with {}","samples":855302,"opsSec":1710593.804860923},{"name":"loop + object.keys starting with { __proto__: null }","samples":439520,"opsSec":878965.031314549},{"name":"loop + object.keys starting with { randomProp: true }","samples":336610,"opsSec":673219.2325300749},{"name":"object.keys + reduce(FN, {})","samples":890239,"opsSec":1780399.2956687354},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":467609,"opsSec":935138.9340031301},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349840,"opsSec":699399.0625869437}]}-->
