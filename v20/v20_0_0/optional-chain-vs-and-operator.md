## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|558,953,809|90|
|Using optional chain (obj.field?.field2) (undefined)|593,285,493|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,559,151|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,784,947|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":558953808.5839281,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":593285492.9841253,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592559151.4127845,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":590784946.7373401,"samples":7}]}-->
