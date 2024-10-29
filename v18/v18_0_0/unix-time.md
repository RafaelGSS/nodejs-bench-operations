## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,823,429|4913360|
|Date.now()|18,942,215|9472239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:12:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":9823429.56368021,"samples":4913360},{"name":"Date.now()","opsSec":18942215.882694855,"samples":9472239}]}-->
