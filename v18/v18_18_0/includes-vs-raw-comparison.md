## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|846,656,094|98|
|using Array.includes (first item)|847,175,300|98|
|Using raw comparison|848,441,150|99|
|Using raw comparison (first item)|847,761,678|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:15:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":846656094.0170757,"samples":11},{"name":"using Array.includes (first item)","opsSec":847175300.2876897,"samples":7},{"name":"Using raw comparison","opsSec":848441150.1127291,"samples":7},{"name":"Using raw comparison (first item)","opsSec":847761678.2131319,"samples":6}]}-->
