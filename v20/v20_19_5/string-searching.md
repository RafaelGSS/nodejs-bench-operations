## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,220,057|8116578|
|Using indexof|16,161,866|8080936|
|Using RegExp.test|13,570,906|6786147|
|Using RegExp.text with cached regex pattern|14,231,638|7115821|
|Using new RegExp.test|4,383,834|2191919|
|Using new RegExp.test with cached regex pattern|4,987,919|2494535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:21:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8116578,"opsSec":16220057.492571874},{"name":"Using indexof","samples":8080936,"opsSec":16161866.343346778},{"name":"Using RegExp.test","samples":6786147,"opsSec":13570906.863325872},{"name":"Using RegExp.text with cached regex pattern","samples":7115821,"opsSec":14231638.128994428},{"name":"Using new RegExp.test","samples":2191919,"opsSec":4383834.001943391},{"name":"Using new RegExp.test with cached regex pattern","samples":2494535,"opsSec":4987919.646067867}]}-->
