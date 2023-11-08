## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|850,483,127|98|
|Using optional chain (obj.field?.field2) (undefined)|851,701,944|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|851,758,107|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|850,979,192|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:38:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":850483127.3692284,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":851701943.536047,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":851758106.6122773,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":850979192.0071164,"samples":8}]}-->
