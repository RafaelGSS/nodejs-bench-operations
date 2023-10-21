## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,025,075|97|
|using Array.includes (first item)|597,212,779|95|
|Using raw comparison|599,311,170|96|
|Using raw comparison (first item)|598,256,157|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":594025074.795496,"samples":6},{"name":"using Array.includes (first item)","opsSec":597212778.712857,"samples":6},{"name":"Using raw comparison","opsSec":599311170.200288,"samples":6},{"name":"Using raw comparison (first item)","opsSec":598256156.7386185,"samples":7}]}-->
