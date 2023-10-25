## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,117,962|92|
|Date.now()|14,628,241|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7117962.272436723,"samples":6},{"name":"Date.now()","opsSec":14628240.779100573,"samples":6}]}-->
