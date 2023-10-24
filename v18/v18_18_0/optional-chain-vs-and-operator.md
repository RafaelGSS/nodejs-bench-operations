## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|702,670,103|85|
|Using optional chain (obj.field?.field2) (undefined)|711,029,323|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|718,486,354|86|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,960,379|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":702670103.3076619,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":711029323.1888188,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":718486353.5767224,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":714960378.7442616,"samples":7}]}-->
