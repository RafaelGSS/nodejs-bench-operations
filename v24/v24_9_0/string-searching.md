## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,601,206|8300611|
|Using indexof|16,611,657|8307148|
|Using RegExp.test|12,682,624|6341816|
|Using RegExp.text with cached regex pattern|13,536,979|6768493|
|Using new RegExp.test|4,641,146|2320574|
|Using new RegExp.test with cached regex pattern|5,275,756|2638445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8300611,"opsSec":16601206.859699344},{"name":"Using indexof","samples":8307148,"opsSec":16611657.238247704},{"name":"Using RegExp.test","samples":6341816,"opsSec":12682624.162588295},{"name":"Using RegExp.text with cached regex pattern","samples":6768493,"opsSec":13536979.55639773},{"name":"Using new RegExp.test","samples":2320574,"opsSec":4641146.013589506},{"name":"Using new RegExp.test with cached regex pattern","samples":2638445,"opsSec":5275756.102843841}]}-->
