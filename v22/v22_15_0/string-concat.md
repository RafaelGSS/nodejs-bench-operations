## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|92,039,234|46019624|
|Using backtick (`)|91,205,506|45602814|
|Using array.join|10,170,718|5085733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:05:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":46019624,"opsSec":92039234.19411488},{"name":"Using backtick (`)","samples":45602814,"opsSec":91205506.14944379},{"name":"Using array.join","samples":5085733,"opsSec":10170718.187774526}]}-->
