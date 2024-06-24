## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,946,250|8473126|
|Using optional chain (obj.field?.field2) (undefined)|17,167,024|8583513|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,595,558|8297780|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,531,205|8265603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:01:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16946250.607358754,"samples":8473126},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":17167024.373441033,"samples":8583513},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16595558.047497442,"samples":8297780},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16531205.328770218,"samples":8265603}]}-->
