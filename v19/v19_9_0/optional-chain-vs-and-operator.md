## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|576,462,844|92|
|Using optional chain (obj.field?.field2) (undefined)|590,893,865|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|585,967,533|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,225,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":576462843.5801349,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":590893864.8120055,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":585967532.6169944,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":590225592.5750984,"samples":6}]}-->
