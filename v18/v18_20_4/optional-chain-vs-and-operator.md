## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,917,153|6958577|
|Using optional chain (obj.field?.field2) (undefined)|13,936,918|6968460|
|Using and operator (obj.field && obj.field.field2) (Valid)|13,974,138|6987070|
|Using and operator (obj.field && obj.field.field2) (undefined)|13,939,266|6969634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:10:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13917153.84270094,"samples":6958577},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13936918.817647055,"samples":6968460},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":13974138.591942709,"samples":6987070},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":13939266.436505448,"samples":6969634}]}-->
