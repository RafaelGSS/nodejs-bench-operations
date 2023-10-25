## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,452,319|92|
|Using optional chain (obj.field?.field2) (undefined)|711,169,788|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,902,958|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,106,966|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":711452318.6756583,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":711169788.051615,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":708902958.4780121,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":710106965.7437314,"samples":6}]}-->
