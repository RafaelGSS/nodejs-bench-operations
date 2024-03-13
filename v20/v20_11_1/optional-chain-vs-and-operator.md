## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|835,545,831|99|
|Using optional chain (obj.field?.field2) (undefined)|835,331,791|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|836,069,219|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|834,559,413|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 16:00:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":835545830.8180912,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":835331790.7665097,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":836069218.6836102,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":834559412.5879385,"samples":6}]}-->
