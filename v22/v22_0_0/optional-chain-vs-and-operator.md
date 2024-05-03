## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,342,184|85|
|Using optional chain (obj.field?.field2) (undefined)|147,072,800|83|
|Using and operator (obj.field && obj.field.field2) (Valid)|156,390,099|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|147,085,520|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:59:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152342183.94473633,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":147072800.1900264,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":156390098.94066307,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":147085520.0342721,"samples":4}]}-->
