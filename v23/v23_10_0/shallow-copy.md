## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,506,384|12254363|
|{ ...object, __proto__: null }|2,524,760|1263197|
|{ ...object, newProp: true }|22,036,953|11020695|
|structuredClone|286,275|143159|
|JSON.parse + JSON.stringify|274,980|137509|
|loop + object.keys starting with {}|1,565,446|782724|
|loop + object.keys starting with { __proto__: null }|822,060|411082|
|loop + object.keys starting with { randomProp: true }|636,906|318502|
|object.keys + reduce(FN, {})|1,722,601|861302|
|object.keys + reduce(FN, { __proto__: null })|855,737|427923|
|object.keys + reduce(FN, { newProp: true })|636,135|318197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12254363,"opsSec":24506384.16992872},{"name":"{ ...object, __proto__: null }","samples":1263197,"opsSec":2524760.691912231},{"name":"{ ...object, newProp: true }","samples":11020695,"opsSec":22036953.696777396},{"name":"structuredClone","samples":143159,"opsSec":286275.6563951113},{"name":"JSON.parse + JSON.stringify","samples":137509,"opsSec":274980.39753055933},{"name":"loop + object.keys starting with {}","samples":782724,"opsSec":1565446.8447002287},{"name":"loop + object.keys starting with { __proto__: null }","samples":411082,"opsSec":822060.4631287899},{"name":"loop + object.keys starting with { randomProp: true }","samples":318502,"opsSec":636906.7698125205},{"name":"object.keys + reduce(FN, {})","samples":861302,"opsSec":1722601.915651682},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":427923,"opsSec":855737.0852067432},{"name":"object.keys + reduce(FN, { newProp: true })","samples":318197,"opsSec":636135.8764176978}]}-->
