## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,232,713|6616357|
|Using Object.getOwnPropertyNames()|13,297,855|6648928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:34:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":13232713.020797873,"samples":6616357},{"name":"Using Object.getOwnPropertyNames()","opsSec":13297855.122330284,"samples":6648928}]}-->
