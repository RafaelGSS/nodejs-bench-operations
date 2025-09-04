## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,999,314|7999911|
|Using indexof|16,080,215|8040771|
|Using RegExp.test|13,711,898|6859127|
|Using RegExp.text with cached regex pattern|14,444,709|7223806|
|Using new RegExp.test|4,212,814|2107439|
|Using new RegExp.test with cached regex pattern|4,959,174|2480491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7999911,"opsSec":15999314.213765485},{"name":"Using indexof","samples":8040771,"opsSec":16080215.703808747},{"name":"Using RegExp.test","samples":6859127,"opsSec":13711898.562440107},{"name":"Using RegExp.text with cached regex pattern","samples":7223806,"opsSec":14444709.913331313},{"name":"Using new RegExp.test","samples":2107439,"opsSec":4212814.512897808},{"name":"Using new RegExp.test with cached regex pattern","samples":2480491,"opsSec":4959174.985737047}]}-->
