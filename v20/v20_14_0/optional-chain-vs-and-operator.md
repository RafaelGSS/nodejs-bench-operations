## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,065,064|10032533|
|Using optional chain (obj.field?.field2) (undefined)|19,886,555|9943278|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,972,501|9986251|
|Using and operator (obj.field && obj.field.field2) (undefined)|19,972,027|9986014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:03:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20065064.59543619,"samples":10032533},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19886555.403360847,"samples":9943278},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19972501.76032263,"samples":9986251},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":19972027.560611177,"samples":9986014}]}-->
