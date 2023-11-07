## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,949,399|98|
|using Array.includes (first item)|849,024,166|93|
|Using raw comparison|850,159,523|97|
|Using raw comparison (first item)|849,341,416|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:12:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848949399.2778369,"samples":6},{"name":"using Array.includes (first item)","opsSec":849024166.3412673,"samples":7},{"name":"Using raw comparison","opsSec":850159522.7655486,"samples":7},{"name":"Using raw comparison (first item)","opsSec":849341416.4850185,"samples":6}]}-->
