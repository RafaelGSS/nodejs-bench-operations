## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|600,946,163|84|
|Using optional chain (obj.field?.field2) (undefined)|602,998,591|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|611,339,828|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|605,335,811|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":600946163.0955361,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":602998591.0189378,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":611339827.9649378,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":605335810.7059579,"samples":7}]}-->
