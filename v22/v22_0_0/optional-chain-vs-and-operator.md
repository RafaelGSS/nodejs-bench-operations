## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,093,855|8046928|
|Using optional chain (obj.field?.field2) (undefined)|16,091,201|8045601|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,187,410|8093706|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,069,436|8034719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:06:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16093855.96782248,"samples":8046928},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16091201.002344174,"samples":8045601},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16187410.348841716,"samples":8093706},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16069436.232319383,"samples":8034719}]}-->
