## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,376,115|97|
|Using optional chain (obj.field?.field2) (undefined)|910,228,456|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|909,926,019|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|908,264,241|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:55:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910376114.5959765,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910228456.1480523,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":909926018.6779265,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":908264241.0688523,"samples":9}]}-->
