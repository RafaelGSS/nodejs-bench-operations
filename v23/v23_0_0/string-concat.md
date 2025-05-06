## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|90,793,478|45396744|
|Using backtick (`)|92,357,019|46178528|
|Using array.join|9,437,108|4720820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:05:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":45396744,"opsSec":90793478.9206521},{"name":"Using backtick (`)","samples":46178528,"opsSec":92357019.24190633},{"name":"Using array.join","samples":4720820,"opsSec":9437108.734492699}]}-->
