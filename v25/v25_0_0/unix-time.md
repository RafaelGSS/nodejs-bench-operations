## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,854,441|4927222|
|Date.now()|19,269,076|9635958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":4927222,"opsSec":9854441.812313918},{"name":"Date.now()","samples":9635958,"opsSec":19269076.20062586}]}-->
