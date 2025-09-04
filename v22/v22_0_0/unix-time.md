## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,077,906|4554196|
|Date.now()|20,418,090|10209056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4554196,"opsSec":9077906.610332808},{"name":"Date.now()","samples":10209056,"opsSec":20418090.07097126}]}-->
