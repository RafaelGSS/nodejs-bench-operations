## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,236,605|5618305|
|Date.now()|20,205,360|10102682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:30:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":5618305,"opsSec":11236605.685143417},{"name":"Date.now()","samples":10102682,"opsSec":20205360.767142277}]}-->
