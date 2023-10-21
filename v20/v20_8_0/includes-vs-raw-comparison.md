## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|599,794,723|89|
|using Array.includes (first item)|610,525,867|93|
|Using raw comparison|606,506,176|91|
|Using raw comparison (first item)|597,707,286|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":599794722.8556126,"samples":8},{"name":"using Array.includes (first item)","opsSec":610525867.3741038,"samples":10},{"name":"Using raw comparison","opsSec":606506176.0073173,"samples":8},{"name":"Using raw comparison (first item)","opsSec":597707285.9817854,"samples":7}]}-->
