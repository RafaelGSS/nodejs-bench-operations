## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,935,974|4969025|
|Date.now()|18,975,645|9487829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:16:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":9935974.752441255,"samples":4969025},{"name":"Date.now()","opsSec":18975645.89353792,"samples":9487829}]}-->
