## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,243,878|6122410|
|Date.now()|20,496,165|10249515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:15:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6122410,"opsSec":12243878.690606266},{"name":"Date.now()","samples":10249515,"opsSec":20496165.7018355}]}-->
