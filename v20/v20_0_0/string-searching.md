## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,027,636|7513821|
|Using indexof|15,047,849|7523926|
|Using RegExp.test|12,650,658|6325331|
|Using RegExp.text with cached regex pattern|13,482,026|6741015|
|Using new RegExp.test|4,245,238|2122624|
|Using new RegExp.test with cached regex pattern|5,088,793|2544527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7513821,"opsSec":15027636.139221905},{"name":"Using indexof","samples":7523926,"opsSec":15047849.201100048},{"name":"Using RegExp.test","samples":6325331,"opsSec":12650658.533719562},{"name":"Using RegExp.text with cached regex pattern","samples":6741015,"opsSec":13482026.440745018},{"name":"Using new RegExp.test","samples":2122624,"opsSec":4245238.762360454},{"name":"Using new RegExp.test with cached regex pattern","samples":2544527,"opsSec":5088793.4028898375}]}-->
