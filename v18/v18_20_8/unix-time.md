## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,924,716|4962884|
|Date.now()|19,266,903|9642673|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:54:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4962884,"opsSec":9924716.059495423},{"name":"Date.now()","samples":9642673,"opsSec":19266903.719759446}]}-->
