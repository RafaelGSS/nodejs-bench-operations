## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,103,107|8551554|
|Using optional chain (obj.field?.field2) (undefined)|16,996,997|8498499|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,968,685|8484343|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,997,555|8498778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:01:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17103107.154578414,"samples":8551554},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16996997.728647493,"samples":8498499},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16968685.158536445,"samples":8484343},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16997555.792814244,"samples":8498778}]}-->
