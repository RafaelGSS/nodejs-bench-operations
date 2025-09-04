## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,843,996|12422003|
|{ ...object, __proto__: null }|2,311,092|1156191|
|{ ...object, newProp: true }|23,097,386|11553122|
|structuredClone|279,779|139916|
|JSON.parse + JSON.stringify|276,882|138482|
|loop + object.keys starting with {}|1,700,863|850843|
|loop + object.keys starting with { __proto__: null }|927,470|463980|
|loop + object.keys starting with { randomProp: true }|654,616|327323|
|object.keys + reduce(FN, {})|1,751,626|876162|
|object.keys + reduce(FN, { __proto__: null })|942,422|471212|
|object.keys + reduce(FN, { newProp: true })|633,448|317634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:08:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12422003,"opsSec":24843996.062401574},{"name":"{ ...object, __proto__: null }","samples":1156191,"opsSec":2311092.391956549},{"name":"{ ...object, newProp: true }","samples":11553122,"opsSec":23097386.060056426},{"name":"structuredClone","samples":139916,"opsSec":279779.63812160696},{"name":"JSON.parse + JSON.stringify","samples":138482,"opsSec":276882.1314913606},{"name":"loop + object.keys starting with {}","samples":850843,"opsSec":1700863.0204189403},{"name":"loop + object.keys starting with { __proto__: null }","samples":463980,"opsSec":927470.7758602076},{"name":"loop + object.keys starting with { randomProp: true }","samples":327323,"opsSec":654616.2581649265},{"name":"object.keys + reduce(FN, {})","samples":876162,"opsSec":1751626.1871595592},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":471212,"opsSec":942422.9294075521},{"name":"object.keys + reduce(FN, { newProp: true })","samples":317634,"opsSec":633448.9803067633}]}-->
