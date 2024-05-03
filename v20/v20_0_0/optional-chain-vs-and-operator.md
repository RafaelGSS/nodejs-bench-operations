## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|915,318,294|99|
|Using optional chain (obj.field?.field2) (undefined)|915,443,047|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|914,995,970|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|914,009,225|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:57:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":915318293.7312914,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":915443047.4479927,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":914995969.6877705,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":914009224.8899934,"samples":7}]}-->
