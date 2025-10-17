## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,854,731|4927592|
|Date.now()|19,995,369|9998392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:30:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":4927592,"opsSec":9854731.726942122},{"name":"Date.now()","samples":9998392,"opsSec":19995369.127680525}]}-->
