## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,507,336|8753670|
|Using optional chain (obj.field?.field2) (undefined)|18,375,231|9187616|
|Using and operator (obj.field && obj.field.field2) (Valid)|17,916,771|8958386|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,105,133|9052567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:12:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17507336.813659035,"samples":8753670},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":18375231.338665657,"samples":9187616},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":17916771.426534973,"samples":8958386},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18105133.529354893,"samples":9052567}]}-->
