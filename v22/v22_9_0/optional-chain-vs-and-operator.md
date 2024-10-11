## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|139,460,201|69761977|
|Using optional chain (obj.field?.field2) (undefined)|95,535,644|47767832|
|Using and operator (obj.field && obj.field.field2) (Valid)|91,074,334|45537977|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,337,277|47668647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:15:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":139460201.16364005,"samples":69761977},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95535644.12858604,"samples":47767832},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":91074334.88047451,"samples":45537977},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95337277.60198826,"samples":47668647}]}-->
