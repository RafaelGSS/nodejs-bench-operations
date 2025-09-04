## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,373,779|12190081|
|{ ...object, __proto__: null }|2,497,333|1248667|
|{ ...object, newProp: true }|22,590,681|11295345|
|structuredClone|300,572|150356|
|JSON.parse + JSON.stringify|292,999|146569|
|loop + object.keys starting with {}|1,623,248|812011|
|loop + object.keys starting with { __proto__: null }|890,671|445353|
|loop + object.keys starting with { randomProp: true }|613,285|306680|
|object.keys + reduce(FN, {})|1,673,681|837447|
|object.keys + reduce(FN, { __proto__: null })|828,235|414132|
|object.keys + reduce(FN, { newProp: true })|604,790|302461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12190081,"opsSec":24373779.335900426},{"name":"{ ...object, __proto__: null }","samples":1248667,"opsSec":2497333.1858693813},{"name":"{ ...object, newProp: true }","samples":11295345,"opsSec":22590681.099271648},{"name":"structuredClone","samples":150356,"opsSec":300572.62747836456},{"name":"JSON.parse + JSON.stringify","samples":146569,"opsSec":292999.1330608858},{"name":"loop + object.keys starting with {}","samples":812011,"opsSec":1623248.1197054265},{"name":"loop + object.keys starting with { __proto__: null }","samples":445353,"opsSec":890671.3136963595},{"name":"loop + object.keys starting with { randomProp: true }","samples":306680,"opsSec":613285.3852468894},{"name":"object.keys + reduce(FN, {})","samples":837447,"opsSec":1673681.2405310238},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":414132,"opsSec":828235.1177849725},{"name":"object.keys + reduce(FN, { newProp: true })","samples":302461,"opsSec":604790.800312525}]}-->
