## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,741,970|6386466|
|Date.now()|19,619,355|9813240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:48:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":6386466,"opsSec":12741970.693155764},{"name":"Date.now()","samples":9813240,"opsSec":19619355.505719073}]}-->
