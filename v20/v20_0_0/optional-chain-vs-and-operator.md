## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,038,180|8019091|
|Using optional chain (obj.field?.field2) (undefined)|16,120,657|8060329|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,148,810|8074406|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,665,594|7832798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:12:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16038180.699907916,"samples":8019091},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16120657.154437881,"samples":8060329},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16148810.421427662,"samples":8074406},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15665594.47613274,"samples":7832798}]}-->
