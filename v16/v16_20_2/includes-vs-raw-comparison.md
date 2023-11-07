## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,791,446|100|
|using Array.includes (first item)|848,805,588|100|
|Using raw comparison|850,117,820|92|
|Using raw comparison (first item)|849,573,467|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:12:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848791446.454233,"samples":6},{"name":"using Array.includes (first item)","opsSec":848805587.5451869,"samples":7},{"name":"Using raw comparison","opsSec":850117820.0981616,"samples":7},{"name":"Using raw comparison (first item)","opsSec":849573466.674274,"samples":7}]}-->
