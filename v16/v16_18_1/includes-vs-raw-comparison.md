## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|711,162,332|92|
|using Array.includes (first item)|712,477,914|96|
|Using raw comparison|713,029,394|97|
|Using raw comparison (first item)|712,999,282|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":711162331.5329621,"samples":8},{"name":"using Array.includes (first item)","opsSec":712477914.3427609,"samples":6},{"name":"Using raw comparison","opsSec":713029393.9479936,"samples":12},{"name":"Using raw comparison (first item)","opsSec":712999282.4611069,"samples":6}]}-->
