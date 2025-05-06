## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,444,248|12227015|
|{ ...object, __proto__: null }|2,303,205|1151889|
|{ ...object, newProp: true }|22,520,392|11260984|
|structuredClone|284,328|142165|
|JSON.parse + JSON.stringify|306,030|153037|
|loop + object.keys starting with {}|1,713,071|856814|
|loop + object.keys starting with { __proto__: null }|902,709|451356|
|loop + object.keys starting with { randomProp: true }|666,867|333476|
|object.keys + reduce(FN, {})|1,768,170|884257|
|object.keys + reduce(FN, { __proto__: null })|932,578|466415|
|object.keys + reduce(FN, { newProp: true })|659,698|329851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12227015,"opsSec":24444248.536171257},{"name":"{ ...object, __proto__: null }","samples":1151889,"opsSec":2303205.5106318668},{"name":"{ ...object, newProp: true }","samples":11260984,"opsSec":22520392.653493103},{"name":"structuredClone","samples":142165,"opsSec":284328.93035456404},{"name":"JSON.parse + JSON.stringify","samples":153037,"opsSec":306030.02776942996},{"name":"loop + object.keys starting with {}","samples":856814,"opsSec":1713071.1696424498},{"name":"loop + object.keys starting with { __proto__: null }","samples":451356,"opsSec":902709.5699058378},{"name":"loop + object.keys starting with { randomProp: true }","samples":333476,"opsSec":666867.85194697},{"name":"object.keys + reduce(FN, {})","samples":884257,"opsSec":1768170.0909173165},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":466415,"opsSec":932578.2877943413},{"name":"object.keys + reduce(FN, { newProp: true })","samples":329851,"opsSec":659698.5405408534}]}-->
