## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,533,804|12269073|
|{ ...object, __proto__: null }|2,348,140|1174689|
|{ ...object, newProp: true }|23,060,112|11536426|
|structuredClone|287,406|143739|
|JSON.parse + JSON.stringify|312,959|156549|
|loop + object.keys starting with {}|1,728,799|864788|
|loop + object.keys starting with { __proto__: null }|929,068|464713|
|loop + object.keys starting with { randomProp: true }|691,916|346038|
|object.keys + reduce(FN, {})|1,779,708|889963|
|object.keys + reduce(FN, { __proto__: null })|940,953|470576|
|object.keys + reduce(FN, { newProp: true })|665,733|332923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12269073,"opsSec":24533804.694191758},{"name":"{ ...object, __proto__: null }","samples":1174689,"opsSec":2348140.224843278},{"name":"{ ...object, newProp: true }","samples":11536426,"opsSec":23060112.256502997},{"name":"structuredClone","samples":143739,"opsSec":287406.1277748151},{"name":"JSON.parse + JSON.stringify","samples":156549,"opsSec":312959.74877913785},{"name":"loop + object.keys starting with {}","samples":864788,"opsSec":1728799.7827279535},{"name":"loop + object.keys starting with { __proto__: null }","samples":464713,"opsSec":929068.2696953},{"name":"loop + object.keys starting with { randomProp: true }","samples":346038,"opsSec":691916.2282399047},{"name":"object.keys + reduce(FN, {})","samples":889963,"opsSec":1779708.6121524428},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":470576,"opsSec":940953.3779152695},{"name":"object.keys + reduce(FN, { newProp: true })","samples":332923,"opsSec":665733.4138279872}]}-->
