## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,053,878|91|
|Using delete property (proto: null)|22,052,788|99|
|Using delete property (cached proto: null)|4,135,614|97|
|Using undefined assignment|847,747,904|97|
|Using undefined assignment (proto: null)|24,813,579|91|
|Using undefined property (cached proto: null)|676,764,814|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:40:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":4053878.232883705,"samples":5},{"name":"Using delete property (proto: null)","opsSec":22052788.10859151,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4135613.9585036747,"samples":6},{"name":"Using undefined assignment","opsSec":847747904.4554414,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24813579.413399205,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":676764813.923223,"samples":7}]}-->
