## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,520,667|91|
|Using Object.getOwnPropertyNames()|91,290,746|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:28:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":87520666.55464543,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":91290745.63107422,"samples":8}]}-->
