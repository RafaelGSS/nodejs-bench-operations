## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,946,136|3473069|
|Date.now()|10,178,226|5089114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:45:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6946136.471854488,"samples":3473069},{"name":"Date.now()","opsSec":10178226.351125449,"samples":5089114}]}-->
