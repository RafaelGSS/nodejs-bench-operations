## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|845,870,263|98|
|Length = 10_000 - Array.at|847,516,138|97|
|Length = 1_000_000 - Array.at|846,760,162|96|
|Length = 100 - Array[length - 1]|846,592,484|92|
|Length = 10_000 - Array[length - 1]|849,741,191|94|
|Length = 1_000_000 - Array[length - 1]|848,152,540|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:41:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":845870263.3180512,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":847516138.2249008,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":846760162.1973292,"samples":9},{"name":"Length = 100 - Array[length - 1]","opsSec":846592483.7208861,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":849741191.2887024,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":848152539.7529279,"samples":7}]}-->
