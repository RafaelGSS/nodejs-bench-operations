## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,938,103|94|
|Using delete property (proto: null)|21,550,463|97|
|Using delete property (cached proto: null)|4,017,651|97|
|Using undefined assignment|851,274,202|99|
|Using undefined assignment (proto: null)|22,789,536|91|
|Using undefined property (cached proto: null)|849,684,990|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3938102.920684783,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21550463.30431913,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4017650.9096067715,"samples":6},{"name":"Using undefined assignment","opsSec":851274201.8282659,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":22789536.248348653,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":849684990.4221085,"samples":8}]}-->
