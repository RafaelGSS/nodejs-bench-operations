## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,012,605|7506303|
|Using optional chain (obj.field?.field2) (undefined)|13,995,767|6997884|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,217,323|7608662|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,305,275|7652638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:14:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15012605.673837734,"samples":7506303},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13995767.216934934,"samples":6997884},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15217323.589742083,"samples":7608662},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15305275.476929765,"samples":7652638}]}-->
