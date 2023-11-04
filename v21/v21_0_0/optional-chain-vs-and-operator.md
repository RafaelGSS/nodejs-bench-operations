## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|580,136,076|91|
|Using optional chain (obj.field?.field2) (undefined)|582,364,642|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|583,440,619|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|584,348,528|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":580136075.5618768,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":582364642.4775295,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":583440619.4261454,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":584348528.4298753,"samples":6}]}-->
