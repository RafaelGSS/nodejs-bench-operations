## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|909,095,908|97|
|Using optional chain (obj.field?.field2) (undefined)|909,673,892|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|910,346,989|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|908,470,337|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":909095907.986825,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":909673892.1913859,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":910346989.3285009,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":908470336.7272731,"samples":8}]}-->
