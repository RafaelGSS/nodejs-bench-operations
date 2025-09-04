## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,049,011|8024509|
|Using indexof|16,121,947|8061534|
|Using RegExp.test|13,207,605|6603925|
|Using RegExp.text with cached regex pattern|14,085,567|7042850|
|Using new RegExp.test|4,916,474|2458749|
|Using new RegExp.test with cached regex pattern|5,484,862|2742433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:42:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8024509,"opsSec":16049011.805081444},{"name":"Using indexof","samples":8061534,"opsSec":16121947.492405381},{"name":"Using RegExp.test","samples":6603925,"opsSec":13207605.368733361},{"name":"Using RegExp.text with cached regex pattern","samples":7042850,"opsSec":14085567.51115199},{"name":"Using new RegExp.test","samples":2458749,"opsSec":4916474.016457749},{"name":"Using new RegExp.test with cached regex pattern","samples":2742433,"opsSec":5484862.643264063}]}-->
