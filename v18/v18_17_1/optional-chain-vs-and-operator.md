## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,419,090|95|
|Using optional chain (obj.field?.field2) (undefined)|592,243,151|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,371,618|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,025,512|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":590419090.081836,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":592243151.3022157,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592371617.9682833,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592025511.558404,"samples":7}]}-->
