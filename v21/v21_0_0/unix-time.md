## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,497,657|5749183|
|Date.now()|20,082,158|10051704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:14:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11497657.58332566,"samples":5749183},{"name":"Date.now()","opsSec":20082158.465662725,"samples":10051704}]}-->
