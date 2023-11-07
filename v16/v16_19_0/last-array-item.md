## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,353,644|98|
|Length = 10_000 - Array.at|26,765,730|98|
|Length = 1_000_000 - Array.at|26,772,566|98|
|Length = 100 - Array[length - 1]|845,386,755|100|
|Length = 10_000 - Array[length - 1]|845,927,088|91|
|Length = 1_000_000 - Array[length - 1]|844,149,122|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:32:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26353643.548432976,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26765729.79838245,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26772565.66606675,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":845386754.5433847,"samples":12},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845927088.1321552,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":844149121.5329099,"samples":6}]}-->
