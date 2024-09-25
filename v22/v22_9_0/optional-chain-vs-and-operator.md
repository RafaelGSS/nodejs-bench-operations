## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,053,802|7526902|
|Using optional chain (obj.field?.field2) (undefined)|15,128,036|7564019|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,464,271|7232136|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,185,914|7592958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:18:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15053802.946258465,"samples":7526902},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15128036.759486806,"samples":7564019},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14464271.363342732,"samples":7232136},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15185914.906702813,"samples":7592958}]}-->
