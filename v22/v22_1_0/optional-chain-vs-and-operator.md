## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,132,968|8066485|
|Using optional chain (obj.field?.field2) (undefined)|16,165,063|8082532|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,264,388|8132195|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,005,238|8002620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:04:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16132968.74161438,"samples":8066485},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16165063.999984326,"samples":8082532},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16264388.14582729,"samples":8132195},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16005238.431567969,"samples":8002620}]}-->
