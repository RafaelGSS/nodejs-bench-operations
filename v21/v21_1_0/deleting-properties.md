## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,136,430|94|
|Using delete property (proto: null)|22,030,812|99|
|Using delete property (cached proto: null)|4,174,599|96|
|Using undefined assignment|843,426,991|95|
|Using undefined assignment (proto: null)|24,569,832|97|
|Using undefined property (cached proto: null)|678,094,341|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:41:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":4136430.174385261,"samples":5},{"name":"Using delete property (proto: null)","opsSec":22030812.211150013,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4174599.2583789197,"samples":5},{"name":"Using undefined assignment","opsSec":843426990.8984731,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24569831.968970355,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":678094341.1598455,"samples":7}]}-->
