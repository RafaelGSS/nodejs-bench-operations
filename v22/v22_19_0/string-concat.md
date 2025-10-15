## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,969,710|48507997|
|Using backtick (`)|96,895,734|48447876|
|Using array.join|10,099,767|5049885|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48507997,"opsSec":96969710.7449403},{"name":"Using backtick (`)","samples":48447876,"opsSec":96895734.55876778},{"name":"Using array.join","samples":5049885,"opsSec":10099767.717452496}]}-->
