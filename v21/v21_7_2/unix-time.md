## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,495,029|5747517|
|Date.now()|20,702,649|10351357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:14:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11495029.44796834,"samples":5747517},{"name":"Date.now()","opsSec":20702649.159302834,"samples":10351357}]}-->
