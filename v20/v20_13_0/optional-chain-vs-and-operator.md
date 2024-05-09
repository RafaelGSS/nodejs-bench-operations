## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,855,047|9927524|
|Using optional chain (obj.field?.field2) (undefined)|20,025,490|10012746|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,016,385|10008193|
|Using and operator (obj.field && obj.field.field2) (undefined)|19,975,001|9987501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:13:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19855047.205815107,"samples":9927524},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20025490.3579194,"samples":10012746},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20016385.519569594,"samples":10008193},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":19975001.121093113,"samples":9987501}]}-->
