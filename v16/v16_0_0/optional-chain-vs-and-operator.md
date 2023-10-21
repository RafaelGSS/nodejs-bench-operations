## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,266,146|96|
|Using optional chain (obj.field?.field2) (undefined)|596,463,992|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|597,076,764|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,705,774|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593266145.9832981,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":596463991.670877,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":597076763.9507191,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596705774.0134026,"samples":8}]}-->
