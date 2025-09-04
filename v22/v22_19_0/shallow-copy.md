## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,977,425|12490477|
|{ ...object, __proto__: null }|2,536,841|1268424|
|{ ...object, newProp: true }|23,137,222|11569365|
|structuredClone|285,057|142529|
|JSON.parse + JSON.stringify|297,490|148782|
|loop + object.keys starting with {}|1,672,222|836297|
|loop + object.keys starting with { __proto__: null }|902,157|451080|
|loop + object.keys starting with { randomProp: true }|653,933|326968|
|object.keys + reduce(FN, {})|1,646,230|823148|
|object.keys + reduce(FN, { __proto__: null })|879,689|440052|
|object.keys + reduce(FN, { newProp: true })|620,753|310377|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:11:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12490477,"opsSec":24977425.788742784},{"name":"{ ...object, __proto__: null }","samples":1268424,"opsSec":2536841.0592028624},{"name":"{ ...object, newProp: true }","samples":11569365,"opsSec":23137222.47113267},{"name":"structuredClone","samples":142529,"opsSec":285057.8187032273},{"name":"JSON.parse + JSON.stringify","samples":148782,"opsSec":297490.5257899404},{"name":"loop + object.keys starting with {}","samples":836297,"opsSec":1672222.983886565},{"name":"loop + object.keys starting with { __proto__: null }","samples":451080,"opsSec":902157.7446056386},{"name":"loop + object.keys starting with { randomProp: true }","samples":326968,"opsSec":653933.7073084221},{"name":"object.keys + reduce(FN, {})","samples":823148,"opsSec":1646230.2495638325},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":440052,"opsSec":879689.6380304191},{"name":"object.keys + reduce(FN, { newProp: true })","samples":310377,"opsSec":620753.1532926989}]}-->
