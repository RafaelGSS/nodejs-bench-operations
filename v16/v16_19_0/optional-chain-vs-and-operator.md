## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|763,905,121|85|
|Using optional chain (obj.field?.field2) (undefined)|769,239,586|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|763,551,551|82|
|Using and operator (obj.field && obj.field.field2) (undefined)|741,775,994|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":763905120.8344207,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":769239585.7551346,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":763551550.6497188,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":741775993.5544393,"samples":6}]}-->
