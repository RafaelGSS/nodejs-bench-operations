## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,630,468|94|
|Using optional chain (obj.field?.field2) (undefined)|911,660,012|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|911,718,644|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|883,654,802|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910630467.6779568,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911660012.3299183,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":911718643.8651503,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":883654801.6261408,"samples":6}]}-->
