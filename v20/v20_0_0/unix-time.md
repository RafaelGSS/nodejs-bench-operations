## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,446,500|3223251|
|Date.now()|9,080,274|4540138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6446500.668987851,"samples":3223251},{"name":"Date.now()","opsSec":9080274.03426532,"samples":4540138}]}-->
