## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,425,159|3212580|
|Date.now()|9,558,684|4779343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:04:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6425159.370332415,"samples":3212580},{"name":"Date.now()","opsSec":9558684.317676084,"samples":4779343}]}-->
