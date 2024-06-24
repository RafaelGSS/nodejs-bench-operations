## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,118,427|7559214|
|Using optional chain (obj.field?.field2) (undefined)|15,090,377|7545189|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,270,157|7635079|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,030,209|7515105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15118427.939525971,"samples":7559214},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15090377.034195395,"samples":7545189},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15270157.572418999,"samples":7635079},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15030209.428858137,"samples":7515105}]}-->
