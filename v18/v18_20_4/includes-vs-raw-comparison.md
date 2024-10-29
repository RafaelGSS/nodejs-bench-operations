## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,079,528|46046627|
|using Array.includes (first item)|85,065,128|42659254|
|Using raw comparison|103,394,962|51703142|
|Using raw comparison (first item)|106,518,331|53260569|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":92079528.07306825,"samples":46046627},{"name":"using Array.includes (first item)","opsSec":85065128.24536118,"samples":42659254},{"name":"Using raw comparison","opsSec":103394962.04486617,"samples":51703142},{"name":"Using raw comparison (first item)","opsSec":106518331.24197178,"samples":53260569}]}-->
