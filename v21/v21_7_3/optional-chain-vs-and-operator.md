## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,295,685|7147843|
|Using optional chain (obj.field?.field2) (undefined)|15,219,912|7609957|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,871,761|7435881|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,901,661|7450831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14295685.399507783,"samples":7147843},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15219912.295299701,"samples":7609957},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14871761.761945257,"samples":7435881},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14901661.016548049,"samples":7450831}]}-->
