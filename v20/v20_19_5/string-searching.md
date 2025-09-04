## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,985,311|8010208|
|Using indexof|16,136,402|8068203|
|Using RegExp.test|13,461,170|6731682|
|Using RegExp.text with cached regex pattern|14,372,411|7186208|
|Using new RegExp.test|4,455,054|2228971|
|Using new RegExp.test with cached regex pattern|5,159,733|2581068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8010208,"opsSec":15985311.552477052},{"name":"Using indexof","samples":8068203,"opsSec":16136402.67590105},{"name":"Using RegExp.test","samples":6731682,"opsSec":13461170.556102565},{"name":"Using RegExp.text with cached regex pattern","samples":7186208,"opsSec":14372411.65953168},{"name":"Using new RegExp.test","samples":2228971,"opsSec":4455054.768105886},{"name":"Using new RegExp.test with cached regex pattern","samples":2581068,"opsSec":5159733.318582869}]}-->
