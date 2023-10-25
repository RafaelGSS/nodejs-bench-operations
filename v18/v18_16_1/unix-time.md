## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,504,975|96|
|Date.now()|15,477,140|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7504975.082936297,"samples":5},{"name":"Date.now()","opsSec":15477139.602749502,"samples":6}]}-->
