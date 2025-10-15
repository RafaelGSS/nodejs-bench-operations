## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,253,135|12626577|
|{ ...object, __proto__: null }|2,372,946|1186708|
|{ ...object, newProp: true }|23,555,530|11781452|
|structuredClone|294,210|147120|
|JSON.parse + JSON.stringify|310,259|155134|
|loop + object.keys starting with {}|1,733,793|866983|
|loop + object.keys starting with { __proto__: null }|921,972|460999|
|loop + object.keys starting with { randomProp: true }|693,651|346860|
|object.keys + reduce(FN, {})|1,792,258|896229|
|object.keys + reduce(FN, { __proto__: null })|934,175|467089|
|object.keys + reduce(FN, { newProp: true })|694,140|347138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12626577,"opsSec":25253135.363186102},{"name":"{ ...object, __proto__: null }","samples":1186708,"opsSec":2372946.69284077},{"name":"{ ...object, newProp: true }","samples":11781452,"opsSec":23555530.600700308},{"name":"structuredClone","samples":147120,"opsSec":294210.5712933958},{"name":"JSON.parse + JSON.stringify","samples":155134,"opsSec":310259.92889820965},{"name":"loop + object.keys starting with {}","samples":866983,"opsSec":1733793.3765962524},{"name":"loop + object.keys starting with { __proto__: null }","samples":460999,"opsSec":921972.9831850743},{"name":"loop + object.keys starting with { randomProp: true }","samples":346860,"opsSec":693651.0455368652},{"name":"object.keys + reduce(FN, {})","samples":896229,"opsSec":1792258.9588890618},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":467089,"opsSec":934175.8289753734},{"name":"object.keys + reduce(FN, { newProp: true })","samples":347138,"opsSec":694140.7147512578}]}-->
