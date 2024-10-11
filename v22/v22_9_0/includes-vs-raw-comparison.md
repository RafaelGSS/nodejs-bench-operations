## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,375,636|45741874|
|using Array.includes (first item)|78,629,204|39350059|
|Using raw comparison|96,739,280|48369644|
|Using raw comparison (first item)|98,485,960|49831085|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91375636.00250727,"samples":45741874},{"name":"using Array.includes (first item)","opsSec":78629204.67917599,"samples":39350059},{"name":"Using raw comparison","opsSec":96739280.26085758,"samples":48369644},{"name":"Using raw comparison (first item)","opsSec":98485960.64184703,"samples":49831085}]}-->
