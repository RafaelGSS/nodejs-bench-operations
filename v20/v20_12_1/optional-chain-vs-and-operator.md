## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|937,922,342|99|
|Using optional chain (obj.field?.field2) (undefined)|937,576,783|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|938,843,230|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|936,166,244|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:57:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":937922342.4523503,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":937576782.6405731,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":938843229.7238026,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":936166243.6149378,"samples":6}]}-->
