## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,506,583|47753336|
|Using backtick (`)|96,131,646|48065830|
|Using array.join|9,989,957|4994981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":47753336,"opsSec":95506583.17887765},{"name":"Using backtick (`)","samples":48065830,"opsSec":96131646.73383275},{"name":"Using array.join","samples":4994981,"opsSec":9989957.104921019}]}-->
