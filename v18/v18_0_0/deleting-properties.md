## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,442,583|96|
|Using delete property (proto: null)|12,418,531|93|
|Using delete property (cached proto: null)|2,441,182|97|
|Using undefined assignment|709,871,448|96|
|Using undefined assignment (proto: null)|14,941,609|97|
|Using undefined property (cached proto: null)|708,676,249|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2442583.3299644017,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12418531.301595902,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2441181.89003604,"samples":7},{"name":"Using undefined assignment","opsSec":709871447.9413433,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14941609.25026634,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":708676249.4264269,"samples":8}]}-->
