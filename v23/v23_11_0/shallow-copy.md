## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,872,193|12437785|
|{ ...object, __proto__: null }|2,510,298|1256223|
|{ ...object, newProp: true }|22,548,311|11276063|
|structuredClone|286,330|143183|
|JSON.parse + JSON.stringify|297,487|148790|
|loop + object.keys starting with {}|1,693,723|846890|
|loop + object.keys starting with { __proto__: null }|832,315|416190|
|loop + object.keys starting with { randomProp: true }|615,536|307837|
|object.keys + reduce(FN, {})|1,765,996|883242|
|object.keys + reduce(FN, { __proto__: null })|855,419|427780|
|object.keys + reduce(FN, { newProp: true })|621,304|310653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:09:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12437785,"opsSec":24872193.599718835},{"name":"{ ...object, __proto__: null }","samples":1256223,"opsSec":2510298.1286739516},{"name":"{ ...object, newProp: true }","samples":11276063,"opsSec":22548311.907944147},{"name":"structuredClone","samples":143183,"opsSec":286330.5053252379},{"name":"JSON.parse + JSON.stringify","samples":148790,"opsSec":297487.4498694209},{"name":"loop + object.keys starting with {}","samples":846890,"opsSec":1693723.6599761746},{"name":"loop + object.keys starting with { __proto__: null }","samples":416190,"opsSec":832315.2275643605},{"name":"loop + object.keys starting with { randomProp: true }","samples":307837,"opsSec":615536.5593038193},{"name":"object.keys + reduce(FN, {})","samples":883242,"opsSec":1765996.8003347171},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":427780,"opsSec":855419.4460308227},{"name":"object.keys + reduce(FN, { newProp: true })","samples":310653,"opsSec":621304.2789871471}]}-->
