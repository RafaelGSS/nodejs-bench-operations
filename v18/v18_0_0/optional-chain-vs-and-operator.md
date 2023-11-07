## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,992,312|97|
|Using optional chain (obj.field?.field2) (undefined)|847,371,927|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,106,836|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,583,535|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846992311.7054302,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847371926.6308289,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":849106835.7390113,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845583535.4366314,"samples":6}]}-->
