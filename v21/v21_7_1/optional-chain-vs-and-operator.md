## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|825,012,334|95|
|Using optional chain (obj.field?.field2) (undefined)|837,318,115|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|834,826,637|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|832,659,535|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":825012333.6299334,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":837318114.96839,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":834826636.6850075,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":832659535.3826927,"samples":8}]}-->
