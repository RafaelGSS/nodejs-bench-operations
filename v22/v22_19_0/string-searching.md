## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,141,293|8073223|
|Using indexof|16,124,059|8062657|
|Using RegExp.test|13,478,522|6739263|
|Using RegExp.text with cached regex pattern|14,353,490|7176747|
|Using new RegExp.test|4,712,109|2356639|
|Using new RegExp.test with cached regex pattern|5,520,998|2760500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8073223,"opsSec":16141293.73132355},{"name":"Using indexof","samples":8062657,"opsSec":16124059.483675933},{"name":"Using RegExp.test","samples":6739263,"opsSec":13478522.010357484},{"name":"Using RegExp.text with cached regex pattern","samples":7176747,"opsSec":14353490.124557668},{"name":"Using new RegExp.test","samples":2356639,"opsSec":4712109.038838081},{"name":"Using new RegExp.test with cached regex pattern","samples":2760500,"opsSec":5520998.619750345}]}-->
