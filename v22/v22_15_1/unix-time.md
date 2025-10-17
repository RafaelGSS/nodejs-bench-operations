## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,637,442|5318723|
|Date.now()|20,384,446|10192225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:29:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":5318723,"opsSec":10637442.021596683},{"name":"Date.now()","samples":10192225,"opsSec":20384446.65695075}]}-->
