## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,244,575|6623331|
|Date.now()|20,117,909|10060948|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:16:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":13244575.47606865,"samples":6623331},{"name":"Date.now()","opsSec":20117909.83734483,"samples":10060948}]}-->
