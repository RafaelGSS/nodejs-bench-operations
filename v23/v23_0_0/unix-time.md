## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,594,266|5797136|
|Date.now()|19,259,571|9631564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:56:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5797136,"opsSec":11594266.202866897},{"name":"Date.now()","samples":9631564,"opsSec":19259571.874130018}]}-->
