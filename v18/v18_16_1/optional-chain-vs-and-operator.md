## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|698,368,164|81|
|Using optional chain (obj.field?.field2) (undefined)|732,901,175|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|727,546,702|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|750,215,069|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":698368163.5143964,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":732901174.6331009,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":727546702.0367265,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":750215069.3324819,"samples":7}]}-->
