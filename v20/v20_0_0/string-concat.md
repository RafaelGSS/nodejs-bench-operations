## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,259,173|48157615|
|Using backtick (`)|90,829,397|45422170|
|Using array.join|10,657,039|5329169|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48157615,"opsSec":96259173.27792327},{"name":"Using backtick (`)","samples":45422170,"opsSec":90829397.47416273},{"name":"Using array.join","samples":5329169,"opsSec":10657039.908596894}]}-->
