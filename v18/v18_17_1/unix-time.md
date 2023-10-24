## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,798,738|92|
|Date.now()|12,529,917|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":5798737.781104157,"samples":6},{"name":"Date.now()","opsSec":12529917.20924108,"samples":4}]}-->
