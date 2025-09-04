## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,862,128|12431067|
|{ ...object, __proto__: null }|2,474,418|1237210|
|{ ...object, newProp: true }|22,591,347|11297778|
|structuredClone|284,127|142091|
|JSON.parse + JSON.stringify|293,720|146906|
|loop + object.keys starting with {}|1,673,342|836709|
|loop + object.keys starting with { __proto__: null }|844,304|422153|
|loop + object.keys starting with { randomProp: true }|620,512|310313|
|object.keys + reduce(FN, {})|1,714,301|857398|
|object.keys + reduce(FN, { __proto__: null })|866,541|433294|
|object.keys + reduce(FN, { newProp: true })|595,638|297859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12431067,"opsSec":24862128.48060748},{"name":"{ ...object, __proto__: null }","samples":1237210,"opsSec":2474418.347088544},{"name":"{ ...object, newProp: true }","samples":11297778,"opsSec":22591347.096487843},{"name":"structuredClone","samples":142091,"opsSec":284127.82875642495},{"name":"JSON.parse + JSON.stringify","samples":146906,"opsSec":293720.31579086656},{"name":"loop + object.keys starting with {}","samples":836709,"opsSec":1673342.1507469912},{"name":"loop + object.keys starting with { __proto__: null }","samples":422153,"opsSec":844304.3215230089},{"name":"loop + object.keys starting with { randomProp: true }","samples":310313,"opsSec":620512.6211748841},{"name":"object.keys + reduce(FN, {})","samples":857398,"opsSec":1714301.660544562},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":433294,"opsSec":866541.4944510758},{"name":"object.keys + reduce(FN, { newProp: true })","samples":297859,"opsSec":595638.5001293877}]}-->
