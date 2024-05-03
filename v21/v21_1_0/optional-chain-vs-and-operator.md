## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|911,051,924|89|
|Using optional chain (obj.field?.field2) (undefined)|911,953,321|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|912,740,717|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|912,877,914|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:55:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":911051923.8326392,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911953321.2329333,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":912740717.2831824,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":912877914.3829656,"samples":6}]}-->
