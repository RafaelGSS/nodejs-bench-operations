## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,026,277|513139|
|Using brackets {}|1,037,737|518872|
|Using '' + |1,041,603|520802|
|Using date.toString()|1,154,655|577328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:55:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1026277.0660878698,"samples":513139},{"name":"Using brackets {}","opsSec":1037737.0679163863,"samples":518872},{"name":"Using '' + ","opsSec":1041603.3312906612,"samples":520802},{"name":"Using date.toString()","opsSec":1154655.6512939935,"samples":577328}]}-->
