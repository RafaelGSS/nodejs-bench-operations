## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,183,928|100|
|Using optional chain (obj.field?.field2) (undefined)|822,110,084|100|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,909,392|100|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,871,491|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822183928.3449476,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822110084.1180519,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821909392.1023669,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820871490.8763968,"samples":9}]}-->
