## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,454,646|8227323|
|Using indexof|16,451,365|8225686|
|Using RegExp.test|13,570,573|6789681|
|Using RegExp.text with cached regex pattern|14,597,803|7299084|
|Using new RegExp.test|4,644,663|2322705|
|Using new RegExp.test with cached regex pattern|5,400,894|2700497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8227323,"opsSec":16454646},{"name":"Using indexof","samples":8225686,"opsSec":16451365.616870143},{"name":"Using RegExp.test","samples":6789681,"opsSec":13570573.45236193},{"name":"Using RegExp.text with cached regex pattern","samples":7299084,"opsSec":14597803.230092885},{"name":"Using new RegExp.test","samples":2322705,"opsSec":4644663.537544227},{"name":"Using new RegExp.test with cached regex pattern","samples":2700497,"opsSec":5400894.159070575}]}-->
