## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|820,050,824|98|
|Using optional chain (obj.field?.field2) (undefined)|821,571,964|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,812,478|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|814,513,831|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":820050824.3773988,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":821571964.0651621,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821812478.2873055,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":814513831.2075303,"samples":7}]}-->
