## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,362,652|6181327|
|Date.now()|20,074,395|10049700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:30:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":6181327,"opsSec":12362652.046700977},{"name":"Date.now()","samples":10049700,"opsSec":20074395.53366722}]}-->
