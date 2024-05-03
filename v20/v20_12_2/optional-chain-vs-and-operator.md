## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|937,713,710|99|
|Using optional chain (obj.field?.field2) (undefined)|936,550,987|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|939,425,691|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|938,253,222|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:56:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":937713710.250248,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":936550986.8230493,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":939425691.4498879,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":938253221.8172731,"samples":6}]}-->
