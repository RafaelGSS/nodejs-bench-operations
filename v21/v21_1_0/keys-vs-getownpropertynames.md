## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,693,565|94|
|Using Object.getOwnPropertyNames()|89,331,068|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using Object.keys()","opsSec":91693565.38924392,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89331068.16948788,"samples":6}]}-->
