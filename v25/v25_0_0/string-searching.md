## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,369,227|8184615|
|Using indexof|16,300,793|8153426|
|Using RegExp.test|13,004,360|6502188|
|Using RegExp.text with cached regex pattern|13,910,579|6955292|
|Using new RegExp.test|4,999,623|2500499|
|Using new RegExp.test with cached regex pattern|5,382,070|2691093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:21:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":8184615,"opsSec":16369227.217231372},{"name":"Using indexof","samples":8153426,"opsSec":16300793.712212095},{"name":"Using RegExp.test","samples":6502188,"opsSec":13004360.654854428},{"name":"Using RegExp.text with cached regex pattern","samples":6955292,"opsSec":13910579.576435693},{"name":"Using new RegExp.test","samples":2500499,"opsSec":4999623.003681528},{"name":"Using new RegExp.test with cached regex pattern","samples":2691093,"opsSec":5382070.565350514}]}-->
