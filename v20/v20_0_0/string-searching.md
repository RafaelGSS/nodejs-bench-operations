## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,163,984|7081996|
|Using indexof|14,543,639|7271821|
|Using RegExp.test|12,738,356|6369998|
|Using RegExp.text with cached regex pattern|13,494,607|6747307|
|Using new RegExp.test|4,352,929|2177202|
|Using new RegExp.test with cached regex pattern|4,895,748|2448441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:20:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7081996,"opsSec":14163984.974663453},{"name":"Using indexof","samples":7271821,"opsSec":14543639.149446726},{"name":"Using RegExp.test","samples":6369998,"opsSec":12738356.267827779},{"name":"Using RegExp.text with cached regex pattern","samples":6747307,"opsSec":13494607.603555998},{"name":"Using new RegExp.test","samples":2177202,"opsSec":4352929.8802960375},{"name":"Using new RegExp.test with cached regex pattern","samples":2448441,"opsSec":4895748.546088106}]}-->
