## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,676,751|93|
|Using Object.getOwnPropertyNames()|88,635,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using Object.keys()","opsSec":90676751.27976142,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":88635897.73853593,"samples":6}]}-->
