## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|716,253,918|96|
|Using optional chain (obj.field?.field2) (undefined)|720,412,710|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|720,345,205|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|718,830,370|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":716253917.6492393,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":720412709.505919,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":720345204.7328719,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":718830369.7903994,"samples":6}]}-->
