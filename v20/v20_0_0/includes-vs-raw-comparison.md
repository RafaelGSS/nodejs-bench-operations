## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|850,779,461|91|
|using Array.includes (first item)|852,898,347|96|
|Using raw comparison|852,942,078|94|
|Using raw comparison (first item)|855,909,080|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:18:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":850779460.5364888,"samples":7},{"name":"using Array.includes (first item)","opsSec":852898347.3714238,"samples":6},{"name":"Using raw comparison","opsSec":852942078.463235,"samples":6},{"name":"Using raw comparison (first item)","opsSec":855909080.2701449,"samples":7}]}-->
