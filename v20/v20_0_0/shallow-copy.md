## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,203,001|11106961|
|{ ...object, __proto__: null }|22,047,348|11024207|
|{ ...object, newProp: true }|829,039|415175|
|structuredClone|264,459|132296|
|JSON.parse + JSON.stringify|202,614|101310|
|loop + object.keys starting with {}|1,537,313|768670|
|loop + object.keys starting with { __proto__: null }|773,980|386993|
|loop + object.keys starting with { randomProp: true }|577,271|288951|
|object.keys + reduce(FN, {})|1,552,936|776471|
|object.keys + reduce(FN, { __proto__: null })|821,762|410888|
|object.keys + reduce(FN, { newProp: true })|565,290|282656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:30:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11106961,"opsSec":22203001.808808368},{"name":"{ ...object, __proto__: null }","samples":11024207,"opsSec":22047348.804389864},{"name":"{ ...object, newProp: true }","samples":415175,"opsSec":829039.4014556573},{"name":"structuredClone","samples":132296,"opsSec":264459.243046746},{"name":"JSON.parse + JSON.stringify","samples":101310,"opsSec":202614.0030307383},{"name":"loop + object.keys starting with {}","samples":768670,"opsSec":1537313.266122302},{"name":"loop + object.keys starting with { __proto__: null }","samples":386993,"opsSec":773980.9180412922},{"name":"loop + object.keys starting with { randomProp: true }","samples":288951,"opsSec":577271.1327062488},{"name":"object.keys + reduce(FN, {})","samples":776471,"opsSec":1552936.294512054},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":410888,"opsSec":821762.4606416983},{"name":"object.keys + reduce(FN, { newProp: true })","samples":282656,"opsSec":565290.7235877456}]}-->
