## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|94,284,619|96|
|Using Object.getOwnPropertyNames()|94,801,768|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:25:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":94284619.09455726,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":94801767.87824053,"samples":7}]}-->
