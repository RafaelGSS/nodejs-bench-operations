## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,467,078|93|
|Date.now()|24,274,871|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 11:01:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":12467077.559076382,"samples":8},{"name":"Date.now()","opsSec":24274870.760036018,"samples":7}]}-->
