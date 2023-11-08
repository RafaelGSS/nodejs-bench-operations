## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|849,527,945|98|
|using Array.includes (first item)|849,391,229|96|
|Using raw comparison|852,285,935|100|
|Using raw comparison (first item)|851,152,348|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:33:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":849527945.2791442,"samples":6},{"name":"using Array.includes (first item)","opsSec":849391229.3337945,"samples":5},{"name":"Using raw comparison","opsSec":852285935.1428543,"samples":6},{"name":"Using raw comparison (first item)","opsSec":851152348.3933381,"samples":6}]}-->
