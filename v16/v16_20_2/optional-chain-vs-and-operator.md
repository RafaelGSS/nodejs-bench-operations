## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|576,968,032|94|
|Using optional chain (obj.field?.field2) (undefined)|587,438,012|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|586,950,778|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,930,301|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":576968031.5738629,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":587438012.2950528,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":586950778.4815152,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":588930300.9073159,"samples":6}]}-->
