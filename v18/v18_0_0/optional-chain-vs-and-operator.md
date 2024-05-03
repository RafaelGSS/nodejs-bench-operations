## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|909,991,723|98|
|Using optional chain (obj.field?.field2) (undefined)|910,121,827|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|909,251,409|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|907,305,715|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:54:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":909991723.3665534,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910121826.8672624,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":909251408.5146583,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":907305714.8150301,"samples":7}]}-->
