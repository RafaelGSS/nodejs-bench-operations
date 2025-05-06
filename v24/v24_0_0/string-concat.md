## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,421,458|46722697|
|Using backtick (`)|83,041,165|41552535|
|Using array.join|10,182,391|5098347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:05:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":46722697,"opsSec":93421458.3013257},{"name":"Using backtick (`)","samples":41552535,"opsSec":83041165.83691253},{"name":"Using array.join","samples":5098347,"opsSec":10182391.58876181}]}-->
