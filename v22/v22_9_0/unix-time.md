## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,230,418|5115367|
|Date.now()|18,655,711|9364020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:44:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10230418.227910979,"samples":5115367},{"name":"Date.now()","opsSec":18655711.805330735,"samples":9364020}]}-->
