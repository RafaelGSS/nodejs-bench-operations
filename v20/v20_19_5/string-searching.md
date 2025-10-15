## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,093,120|8046649|
|Using indexof|16,003,246|8001626|
|Using RegExp.test|13,661,348|6830802|
|Using RegExp.text with cached regex pattern|14,374,714|7187359|
|Using new RegExp.test|4,501,617|2251428|
|Using new RegExp.test with cached regex pattern|5,157,136|2578832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:00:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8046649,"opsSec":16093120.846925717},{"name":"Using indexof","samples":8001626,"opsSec":16003246.718928583},{"name":"Using RegExp.test","samples":6830802,"opsSec":13661348.560104622},{"name":"Using RegExp.text with cached regex pattern","samples":7187359,"opsSec":14374714.032578928},{"name":"Using new RegExp.test","samples":2251428,"opsSec":4501617.695004459},{"name":"Using new RegExp.test with cached regex pattern","samples":2578832,"opsSec":5157136.538389127}]}-->
