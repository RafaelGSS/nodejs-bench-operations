## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,049,977|94|
|Using delete property (proto: null)|20,312,974|98|
|Using delete property (cached proto: null)|3,098,573|97|
|Using undefined assignment|823,037,993|96|
|Using undefined assignment (proto: null)|22,104,650|95|
|Using undefined property (cached proto: null)|818,885,300|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3049976.854099395,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20312973.5376654,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3098572.5470733102,"samples":5},{"name":"Using undefined assignment","opsSec":823037992.6999936,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22104650.057469316,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818885300.2641113,"samples":11}]}-->
