## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,255,731|5127868|
|Date.now()|19,644,993|9824833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5127868,"opsSec":10255731.938730154},{"name":"Date.now()","samples":9824833,"opsSec":19644993.320468765}]}-->
