## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|845,770,689|99|
|using Array.includes (first item)|846,402,202|97|
|Using raw comparison|848,228,065|99|
|Using raw comparison (first item)|847,506,657|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:21:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":845770689.2386894,"samples":6},{"name":"using Array.includes (first item)","opsSec":846402201.7826042,"samples":8},{"name":"Using raw comparison","opsSec":848228064.8031232,"samples":9},{"name":"Using raw comparison (first item)","opsSec":847506657.0104642,"samples":7}]}-->
