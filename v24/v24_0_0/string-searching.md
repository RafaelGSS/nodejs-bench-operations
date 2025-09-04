## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,944,244|7975880|
|Using indexof|16,049,065|8024533|
|Using RegExp.test|12,561,014|6282039|
|Using RegExp.text with cached regex pattern|13,209,506|6610498|
|Using new RegExp.test|4,450,342|2225501|
|Using new RegExp.test with cached regex pattern|5,140,402|2570205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:40:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7975880,"opsSec":15944244.39340877},{"name":"Using indexof","samples":8024533,"opsSec":16049065.293841125},{"name":"Using RegExp.test","samples":6282039,"opsSec":12561014.82068177},{"name":"Using RegExp.text with cached regex pattern","samples":6610498,"opsSec":13209506.872883227},{"name":"Using new RegExp.test","samples":2225501,"opsSec":4450342.3702538805},{"name":"Using new RegExp.test with cached regex pattern","samples":2570205,"opsSec":5140402.176307888}]}-->
