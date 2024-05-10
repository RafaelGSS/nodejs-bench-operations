## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,535,558|3267780|
|Date.now()|9,132,228|4566115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:48:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6535558.836669652,"samples":3267780},{"name":"Date.now()","opsSec":9132228.301398715,"samples":4566115}]}-->
