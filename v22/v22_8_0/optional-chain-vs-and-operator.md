## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|141,297,371|70661631|
|Using optional chain (obj.field?.field2) (undefined)|98,710,485|49410422|
|Using and operator (obj.field && obj.field.field2) (Valid)|96,650,001|48384161|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,941,359|48975110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":141297371.2348844,"samples":70661631},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98710485.6770131,"samples":49410422},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":96650001.71480072,"samples":48384161},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97941359.44109409,"samples":48975110}]}-->
