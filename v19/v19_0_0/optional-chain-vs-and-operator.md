## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|591,212,624|93|
|Using optional chain (obj.field?.field2) (undefined)|579,267,420|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|589,327,517|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|588,945,724|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:21:42 GMT+0000 (Coordinated Universal Time)
</details>

