## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,458,529|89|
|Using Object.getOwnPropertyNames()|89,664,767|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using Object.keys()","opsSec":92458528.85488057,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89664766.9619494,"samples":6}]}-->
