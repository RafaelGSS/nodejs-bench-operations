## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,698,204|12363889|
|{ ...object, __proto__: null }|2,542,973|1271686|
|{ ...object, newProp: true }|21,478,682|10739342|
|structuredClone|312,136|156155|
|JSON.parse + JSON.stringify|309,484|154799|
|loop + object.keys starting with {}|1,674,608|837371|
|loop + object.keys starting with { __proto__: null }|904,485|452243|
|loop + object.keys starting with { randomProp: true }|676,206|338157|
|object.keys + reduce(FN, {})|1,733,642|866855|
|object.keys + reduce(FN, { __proto__: null })|953,509|476755|
|object.keys + reduce(FN, { newProp: true })|694,299|347210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:14:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24698204.37008726,"samples":12363889},{"name":"{ ...object, __proto__: null }","opsSec":2542973.8313293857,"samples":1271686},{"name":"{ ...object, newProp: true }","opsSec":21478682.195790693,"samples":10739342},{"name":"structuredClone","opsSec":312136.3835007692,"samples":156155},{"name":"JSON.parse + JSON.stringify","opsSec":309484.015180305,"samples":154799},{"name":"loop + object.keys starting with {}","opsSec":1674608.0481022324,"samples":837371},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":904485.70513766,"samples":452243},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":676206.3384840246,"samples":338157},{"name":"object.keys + reduce(FN, {})","opsSec":1733642.5474357642,"samples":866855},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":953509.8951139116,"samples":476755},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":694299.7958763399,"samples":347210}]}-->
