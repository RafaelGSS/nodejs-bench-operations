## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,567,385|8287775|
|Using indexof|16,534,537|8267270|
|Using RegExp.test|12,614,882|6308919|
|Using RegExp.text with cached regex pattern|13,480,969|6740489|
|Using new RegExp.test|4,600,877|2300825|
|Using new RegExp.test with cached regex pattern|5,223,508|2611769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8287775,"opsSec":16567385.360550925},{"name":"Using indexof","samples":8267270,"opsSec":16534537.255266815},{"name":"Using RegExp.test","samples":6308919,"opsSec":12614882.358293215},{"name":"Using RegExp.text with cached regex pattern","samples":6740489,"opsSec":13480969.102560392},{"name":"Using new RegExp.test","samples":2300825,"opsSec":4600877.1814580755},{"name":"Using new RegExp.test with cached regex pattern","samples":2611769,"opsSec":5223508.017063982}]}-->
