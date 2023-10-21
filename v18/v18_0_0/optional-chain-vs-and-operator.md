## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,178,678|96|
|Using optional chain (obj.field?.field2) (undefined)|712,795,948|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,133,173|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,540,833|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":710178677.618671,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":712795947.7547957,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":709133172.7403678,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":710540833.4400622,"samples":7}]}-->
